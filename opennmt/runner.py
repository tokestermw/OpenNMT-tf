"""Main library entrypoint."""

import io
import os
import sys
import random

import numpy as np
import tensorflow as tf

from opennmt.utils import hooks
from opennmt.utils.evaluator import external_evaluation_fn


class Runner(object):
  """Class for managing training, inference, and export. It is mostly a
  wrapper around ``tf.estimator.Estimator``.
  """

  def __init__(self,
               model,
               config,
               seed=None,
               num_devices=1,
               gpu_allow_growth=False):
    """Initializes the runner parameters.

    Args:
      model: A :class:`opennmt.models.model.Model` instance to run.
      config: The run configuration.
      seed: The random seed to set.
      num_devices: The number of devices (GPUs) to use for training.
      gpu_allow_growth: Allow GPU memory to grow dynamically.
    """
    self._model = model
    self._config = config
    self._num_devices = num_devices

    session_config = tf.ConfigProto(
        allow_soft_placement=True,
        log_device_placement=False,
        gpu_options=tf.GPUOptions(
            allow_growth=gpu_allow_growth))
    run_config = tf.estimator.RunConfig(
        model_dir=self._config["model_dir"],
        session_config=session_config,
        tf_random_seed=seed)

    # Create a first session to enforce GPU options.
    # See https://github.com/OpenNMT/OpenNMT-tf/issues/80.
    _ = tf.Session(config=session_config)

    np.random.seed(seed)
    random.seed(seed)

    if "train" in self._config:
      if "save_summary_steps" in self._config["train"]:
        run_config = run_config.replace(
            save_summary_steps=self._config["train"]["save_summary_steps"],
            log_step_count_steps=self._config["train"]["save_summary_steps"])
      if "save_checkpoints_steps" in self._config["train"]:
        run_config = run_config.replace(
            save_checkpoints_secs=None,
            save_checkpoints_steps=self._config["train"]["save_checkpoints_steps"])
      if "keep_checkpoint_max" in self._config["train"]:
        run_config = run_config.replace(
            keep_checkpoint_max=self._config["train"]["keep_checkpoint_max"])

    self._estimator = tf.estimator.Estimator(
        self._model.model_fn(num_devices=self._num_devices),
        config=run_config,
        params=self._config["params"])

  def _build_train_spec(self):
    train_hooks = [
        hooks.LogParametersCountHook(),
        hooks.CountersHook(
            every_n_steps=self._estimator.config.save_summary_steps,
            output_dir=self._estimator.model_dir)]

    train_spec = tf.estimator.TrainSpec(
        input_fn=self._model.input_fn(
            tf.estimator.ModeKeys.TRAIN,
            self._config["train"]["batch_size"],
            self._config["data"],
            self._config["data"]["train_features_file"],
            labels_file=self._config["data"]["train_labels_file"],
            batch_type=self._config["train"].get("batch_type", "examples"),
            batch_multiplier=self._num_devices,
            bucket_width=self._config["train"].get("bucket_width", 5),
            single_pass=self._config["train"].get("single_pass", False),
            num_threads=self._config["train"].get("num_threads"),
            sample_buffer_size=self._config["train"].get("sample_buffer_size", 500000),
            prefetch_buffer_size=self._config["train"].get("prefetch_buffer_size", 1),
            maximum_features_length=self._config["train"].get("maximum_features_length"),
            maximum_labels_length=self._config["train"].get("maximum_labels_length")),
        max_steps=self._config["train"].get("train_steps"),
        hooks=train_hooks)
    return train_spec

  def _build_eval_spec(self):
    if "eval" not in self._config:
      self._config["eval"] = {}

    eval_hooks = []
    if (self._config["eval"].get("save_eval_predictions", False)
        or self._config["eval"].get("external_evaluators") is not None):
      save_path = os.path.join(self._estimator.model_dir, "eval")
      if not os.path.isdir(save_path):
        os.makedirs(save_path)
      eval_hooks.append(hooks.SaveEvaluationPredictionHook(
          self._model,
          os.path.join(save_path, "predictions.txt"),
          post_evaluation_fn=external_evaluation_fn(
              self._config["eval"].get("external_evaluators"),
              self._config["data"]["eval_labels_file"],
              output_dir=self._estimator.model_dir)))

    eval_spec = tf.estimator.EvalSpec(
        input_fn=self._model.input_fn(
            tf.estimator.ModeKeys.EVAL,
            self._config["eval"].get("batch_size", 32),
            self._config["data"],
            self._config["data"]["eval_features_file"],
            num_threads=self._config["eval"].get("num_threads"),
            prefetch_buffer_size=self._config["eval"].get("prefetch_buffer_size", 1),
            labels_file=self._config["data"]["eval_labels_file"]),
        steps=None,
        hooks=eval_hooks,
        exporters=tf.estimator.LatestExporter(
            "latest", self._model.serving_input_fn(self._config["data"])),
        throttle_secs=self._config["eval"].get("eval_delay", 18000))
    return eval_spec

  def train_and_evaluate(self):
    """Runs the training and evaluation loop."""
    train_spec = self._build_train_spec()
    eval_spec = self._build_eval_spec()
    tf.estimator.train_and_evaluate(self._estimator, train_spec, eval_spec)

  def train(self):
    """Runs the training loop."""
    train_spec = self._build_train_spec()
    self._estimator.train(
        train_spec.input_fn, hooks=train_spec.hooks, max_steps=train_spec.max_steps)

  def evaluate(self, checkpoint_path=None):
    """Runs evaluation."""
    if checkpoint_path is not None and os.path.isdir(checkpoint_path):
      checkpoint_path = tf.train.latest_checkpoint(checkpoint_path)
    eval_spec = self._build_eval_spec()
    self._estimator.evaluate(
        eval_spec.input_fn, hooks=eval_spec.hooks, checkpoint_path=checkpoint_path)

  def infer(self, features_file, predictions_file=None, checkpoint_path=None):
    """Runs inference.

    Args:
      features_file: The file(s) to infer from.
      predictions_file: If set, predictions are saved in this file.
      checkpoint_path: Path of a specific checkpoint to predict. If ``None``,
        the latest is used.
    """
    if "infer" not in self._config:
      self._config["infer"] = {}
    if checkpoint_path is not None and os.path.isdir(checkpoint_path):
      checkpoint_path = tf.train.latest_checkpoint(checkpoint_path)

    batch_size = self._config["infer"].get("batch_size", 1)
    input_fn = self._model.input_fn(
        tf.estimator.ModeKeys.PREDICT,
        batch_size,
        self._config["data"],
        features_file,
        num_threads=self._config["infer"].get("num_threads"),
        prefetch_buffer_size=self._config["infer"].get("prefetch_buffer_size", 1))

    if predictions_file:
      stream = io.open(predictions_file, encoding="utf-8", mode="w")
    else:
      stream = sys.stdout

    for prediction in self._estimator.predict(input_fn=input_fn, checkpoint_path=checkpoint_path):
      self._model.print_prediction(prediction, params=self._config["infer"], stream=stream)

    if predictions_file:
      stream.close()

  def export(self, checkpoint_path=None):
    """Exports a model.

    Args:
      checkpoint_path: The checkpoint path to export. If ``None``, the latest is used.

    Returns:
      The string path to the exported directory.
    """
    if checkpoint_path is not None and os.path.isdir(checkpoint_path):
      checkpoint_path = tf.train.latest_checkpoint(checkpoint_path)

    export_dir = os.path.join(self._estimator.model_dir, "export")
    if not os.path.isdir(export_dir):
      os.makedirs(export_dir)

    return self._estimator.export_savedmodel(
        os.path.join(export_dir, "manual"),
        self._model.serving_input_fn(self._config["data"]),
        checkpoint_path=checkpoint_path,
        strip_default_attrs=True)
