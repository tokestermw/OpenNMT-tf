"""ARK data file to TFRecords converter.

The scripts takes the ARK data file and the indexed target text
to write aligned source and target data.

An entry of the ARK file should follow the format:

```
KEY [
FEAT1.1 FEAT1.2 FEAT1.3 ... FEAT1.n
...
FEATm.1 FEATm.2 FEATm.3 ... FEATm.n ]
```

which describes the entry `KEY` with `m` vectors of depth `n`.

The target text should also be indexed:

```
KEY token1 token2 ... tokenN
```
"""

from __future__ import print_function

import argparse
import numpy as np
import tensorflow as tf


def consume_next_vector(ark_file):
  idx = None
  vector = []

  for line in ark_file:
    line = line.strip()
    fields = line.split()

    if not idx:
      idx = fields[0]
      fields.pop(0)
      fields.pop(0)

    end = fields and fields[-1] == "]"

    if end:
      fields.pop()

    if fields:
      vector.append(fields)

    if end:
      break

  return idx, np.asarray(vector, dtype=np.float32)

def consume_next_text(text_file):
  idx = None
  text = text_file.readline()

  if text:
    tokens = text.strip().split()
    idx = tokens[0]
    tokens.pop(0)
    text = " ".join(tokens)

  return idx, text

def write_record(vector, writer):
  shape = list(vector.shape)
  values = vector.flatten().tolist()

  example = tf.train.Example(features=tf.train.Features(feature={
      "shape": tf.train.Feature(int64_list=tf.train.Int64List(value=shape)),
      "values": tf.train.Feature(float_list=tf.train.FloatList(value=values))
  }))

  writer.write(example.SerializeToString())

def write_text(text, writer):
  writer.write(text)
  writer.write("\n")

def ark_to_records(ark_filename, text_filename, out_prefix):
  record_writer = tf.python_io.TFRecordWriter(out_prefix + ".records")
  text_writer = open(out_prefix + ".txt", "w")

  ark_buffer = {}
  text_buffer = {}
  count = 0

  def write_example(vector, text):
    write_record(vector, record_writer)
    write_text(text, text_writer)

  def search_aligned():
    for idx in ark_buffer:
      if idx in text_buffer:
        vector = ark_buffer[idx]
        text = text_buffer[idx]

        del ark_buffer[idx]
        del text_buffer[idx]

        return vector, text

    return None, None

  with open(ark_filename) as ark_file, open(text_filename) as text_file:
    while True:
      ark_idx, vector = consume_next_vector(ark_file)
      text_idx, text = consume_next_text(text_file)

      if not ark_idx and not text_idx:
        # Both files are empty.
        break

      if ark_idx == text_idx:
        # If the indices match, write the example.
        write_example(vector, text)
        count += 1
      else:
        # Otherwise store the entries.
        if ark_idx:
          ark_buffer[ark_idx] = vector
        if text_idx:
          text_buffer[text_idx] = text

        # Look if we can now find aligned entries.
        vector, text = search_aligned()

        if vector is not None:
          write_example(vector, text)
          count += 1

  # Search alignments in stored entries.
  while True:
    vector, text = search_aligned()
    if vector is None:
      break
    write_example(vector, text)
    count += 1

  record_writer.close()
  text_writer.close()

  print("Saved {} aligned records.".format(count))


def main():
  parser = argparse.ArgumentParser(description="ARK to TFRecords converter.")
  parser.add_argument("--ark", required=True,
                      help="ARK data file")
  parser.add_argument("--txt", required=True,
                      help="indexed text data file")
  parser.add_argument("--out", required=True,
                      help="output files prefix")
  args = parser.parse_args()
  ark_to_records(args.ark, args.txt, args.out)

if __name__ == "__main__":
  main()