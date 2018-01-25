Search.setIndex({docnames:["README","configuration","data","index","package/modules","package/opennmt","package/opennmt.config","package/opennmt.constants","package/opennmt.decoders","package/opennmt.decoders.decoder","package/opennmt.decoders.rnn_decoder","package/opennmt.decoders.self_attention_decoder","package/opennmt.encoders","package/opennmt.encoders.conv_encoder","package/opennmt.encoders.encoder","package/opennmt.encoders.mean_encoder","package/opennmt.encoders.rnn_encoder","package/opennmt.encoders.self_attention_encoder","package/opennmt.inputters","package/opennmt.inputters.inputter","package/opennmt.inputters.record_inputter","package/opennmt.inputters.text_inputter","package/opennmt.models","package/opennmt.models.model","package/opennmt.models.sequence_classifier","package/opennmt.models.sequence_tagger","package/opennmt.models.sequence_to_sequence","package/opennmt.models.transformer","package/opennmt.tokenizers","package/opennmt.tokenizers.opennmt_tokenizer","package/opennmt.tokenizers.tokenizer","package/opennmt.utils","package/opennmt.utils.beam_search","package/opennmt.utils.bridge","package/opennmt.utils.cell","package/opennmt.utils.decay","package/opennmt.utils.evaluator","package/opennmt.utils.hooks","package/opennmt.utils.losses","package/opennmt.utils.misc","package/opennmt.utils.position","package/opennmt.utils.reducer","package/opennmt.utils.transformer","package/opennmt.utils.vocab","serving","tokenization","training"],envversion:53,filenames:["README.md","configuration.md","data.md","index.rst","package/modules.rst","package/opennmt.rst","package/opennmt.config.rst","package/opennmt.constants.rst","package/opennmt.decoders.rst","package/opennmt.decoders.decoder.rst","package/opennmt.decoders.rnn_decoder.rst","package/opennmt.decoders.self_attention_decoder.rst","package/opennmt.encoders.rst","package/opennmt.encoders.conv_encoder.rst","package/opennmt.encoders.encoder.rst","package/opennmt.encoders.mean_encoder.rst","package/opennmt.encoders.rnn_encoder.rst","package/opennmt.encoders.self_attention_encoder.rst","package/opennmt.inputters.rst","package/opennmt.inputters.inputter.rst","package/opennmt.inputters.record_inputter.rst","package/opennmt.inputters.text_inputter.rst","package/opennmt.models.rst","package/opennmt.models.model.rst","package/opennmt.models.sequence_classifier.rst","package/opennmt.models.sequence_tagger.rst","package/opennmt.models.sequence_to_sequence.rst","package/opennmt.models.transformer.rst","package/opennmt.tokenizers.rst","package/opennmt.tokenizers.opennmt_tokenizer.rst","package/opennmt.tokenizers.tokenizer.rst","package/opennmt.utils.rst","package/opennmt.utils.beam_search.rst","package/opennmt.utils.bridge.rst","package/opennmt.utils.cell.rst","package/opennmt.utils.decay.rst","package/opennmt.utils.evaluator.rst","package/opennmt.utils.hooks.rst","package/opennmt.utils.losses.rst","package/opennmt.utils.misc.rst","package/opennmt.utils.position.rst","package/opennmt.utils.reducer.rst","package/opennmt.utils.transformer.rst","package/opennmt.utils.vocab.rst","serving.md","tokenization.md","training.md"],objects:{"":{opennmt:[5,0,0,"-"]},"opennmt.config":{load_config:[6,1,1,""],load_model_module:[6,1,1,""]},"opennmt.decoders":{decoder:[9,0,0,"-"],rnn_decoder:[10,0,0,"-"],self_attention_decoder:[11,0,0,"-"]},"opennmt.decoders.decoder":{Decoder:[9,2,1,""],get_embedding_fn:[9,1,1,""],get_sampling_probability:[9,1,1,""],logits_to_cum_log_probs:[9,1,1,""]},"opennmt.decoders.decoder.Decoder":{decode:[9,3,1,""],dynamic_decode:[9,3,1,""],dynamic_decode_and_search:[9,3,1,""]},"opennmt.decoders.rnn_decoder":{AttentionalRNNDecoder:[10,2,1,""],MultiAttentionalRNNDecoder:[10,2,1,""],RNNDecoder:[10,2,1,""]},"opennmt.decoders.rnn_decoder.AttentionalRNNDecoder":{__init__:[10,3,1,""]},"opennmt.decoders.rnn_decoder.MultiAttentionalRNNDecoder":{__init__:[10,3,1,""]},"opennmt.decoders.rnn_decoder.RNNDecoder":{__init__:[10,3,1,""],decode:[10,3,1,""],dynamic_decode:[10,3,1,""],dynamic_decode_and_search:[10,3,1,""]},"opennmt.decoders.self_attention_decoder":{SelfAttentionDecoder:[11,2,1,""]},"opennmt.decoders.self_attention_decoder.SelfAttentionDecoder":{__init__:[11,3,1,""],decode:[11,3,1,""],dynamic_decode:[11,3,1,""],dynamic_decode_and_search:[11,3,1,""]},"opennmt.encoders":{conv_encoder:[13,0,0,"-"],encoder:[14,0,0,"-"],mean_encoder:[15,0,0,"-"],rnn_encoder:[16,0,0,"-"],self_attention_encoder:[17,0,0,"-"]},"opennmt.encoders.conv_encoder":{ConvEncoder:[13,2,1,""]},"opennmt.encoders.conv_encoder.ConvEncoder":{__init__:[13,3,1,""],encode:[13,3,1,""]},"opennmt.encoders.encoder":{Encoder:[14,2,1,""],ParallelEncoder:[14,2,1,""],SequentialEncoder:[14,2,1,""]},"opennmt.encoders.encoder.Encoder":{encode:[14,3,1,""]},"opennmt.encoders.encoder.ParallelEncoder":{__init__:[14,3,1,""],encode:[14,3,1,""]},"opennmt.encoders.encoder.SequentialEncoder":{__init__:[14,3,1,""],encode:[14,3,1,""]},"opennmt.encoders.mean_encoder":{MeanEncoder:[15,2,1,""]},"opennmt.encoders.mean_encoder.MeanEncoder":{encode:[15,3,1,""]},"opennmt.encoders.rnn_encoder":{BidirectionalRNNEncoder:[16,2,1,""],GoogleRNNEncoder:[16,2,1,""],PyramidalRNNEncoder:[16,2,1,""],RNNEncoder:[16,2,1,""],UnidirectionalRNNEncoder:[16,2,1,""]},"opennmt.encoders.rnn_encoder.BidirectionalRNNEncoder":{__init__:[16,3,1,""],encode:[16,3,1,""]},"opennmt.encoders.rnn_encoder.GoogleRNNEncoder":{__init__:[16,3,1,""],encode:[16,3,1,""]},"opennmt.encoders.rnn_encoder.PyramidalRNNEncoder":{__init__:[16,3,1,""],encode:[16,3,1,""]},"opennmt.encoders.rnn_encoder.RNNEncoder":{__init__:[16,3,1,""],encode:[16,3,1,""]},"opennmt.encoders.rnn_encoder.UnidirectionalRNNEncoder":{__init__:[16,3,1,""],encode:[16,3,1,""]},"opennmt.encoders.self_attention_encoder":{SelfAttentionEncoder:[17,2,1,""]},"opennmt.encoders.self_attention_encoder.SelfAttentionEncoder":{__init__:[17,3,1,""],encode:[17,3,1,""]},"opennmt.inputters":{inputter:[19,0,0,"-"],record_inputter:[20,0,0,"-"],text_inputter:[21,0,0,"-"]},"opennmt.inputters.inputter":{Inputter:[19,2,1,""],MixedInputter:[19,2,1,""],MultiInputter:[19,2,1,""],ParallelInputter:[19,2,1,""]},"opennmt.inputters.inputter.Inputter":{add_process_hooks:[19,3,1,""],get_length:[19,3,1,""],get_serving_input_receiver:[19,3,1,""],initialize:[19,3,1,""],make_dataset:[19,3,1,""],process:[19,3,1,""],remove_data_field:[19,3,1,""],set_data_field:[19,3,1,""],transform:[19,3,1,""],transform_data:[19,3,1,""],visualize:[19,3,1,""]},"opennmt.inputters.inputter.MixedInputter":{__init__:[19,3,1,""],get_length:[19,3,1,""],make_dataset:[19,3,1,""],transform:[19,3,1,""]},"opennmt.inputters.inputter.MultiInputter":{initialize:[19,3,1,""],make_dataset:[19,3,1,""],transform:[19,3,1,""],visualize:[19,3,1,""]},"opennmt.inputters.inputter.ParallelInputter":{__init__:[19,3,1,""],get_length:[19,3,1,""],make_dataset:[19,3,1,""],transform:[19,3,1,""]},"opennmt.inputters.record_inputter":{SequenceRecordInputter:[20,2,1,""]},"opennmt.inputters.record_inputter.SequenceRecordInputter":{__init__:[20,3,1,""],get_length:[20,3,1,""],initialize:[20,3,1,""],make_dataset:[20,3,1,""],transform:[20,3,1,""]},"opennmt.inputters.text_inputter":{CharConvEmbedder:[21,2,1,""],TextInputter:[21,2,1,""],WordEmbedder:[21,2,1,""],load_pretrained_embeddings:[21,1,1,""],tokens_to_chars:[21,1,1,""],visualize_embeddings:[21,1,1,""]},"opennmt.inputters.text_inputter.CharConvEmbedder":{__init__:[21,3,1,""],initialize:[21,3,1,""],transform:[21,3,1,""],visualize:[21,3,1,""]},"opennmt.inputters.text_inputter.TextInputter":{get_length:[21,3,1,""],initialize:[21,3,1,""],make_dataset:[21,3,1,""],transform:[21,3,1,""]},"opennmt.inputters.text_inputter.WordEmbedder":{__init__:[21,3,1,""],initialize:[21,3,1,""],transform:[21,3,1,""],visualize:[21,3,1,""]},"opennmt.models":{model:[23,0,0,"-"],sequence_classifier:[24,0,0,"-"],sequence_tagger:[25,0,0,"-"],sequence_to_sequence:[26,0,0,"-"],transformer:[27,0,0,"-"]},"opennmt.models.model":{Model:[23,2,1,""],get_optimizer_class:[23,1,1,""],learning_rate_decay_fn:[23,1,1,""]},"opennmt.models.model.Model":{__call__:[23,3,1,""],input_fn:[23,3,1,""],print_prediction:[23,3,1,""],serving_input_fn:[23,3,1,""]},"opennmt.models.sequence_classifier":{SequenceClassifier:[24,2,1,""]},"opennmt.models.sequence_classifier.SequenceClassifier":{__init__:[24,3,1,""],print_prediction:[24,3,1,""]},"opennmt.models.sequence_tagger":{SequenceTagger:[25,2,1,""],flag_bioes_tags:[25,1,1,""]},"opennmt.models.sequence_tagger.SequenceTagger":{__init__:[25,3,1,""],print_prediction:[25,3,1,""]},"opennmt.models.sequence_to_sequence":{SequenceToSequence:[26,2,1,""],shift_target_sequence:[26,1,1,""]},"opennmt.models.sequence_to_sequence.SequenceToSequence":{__init__:[26,3,1,""],print_prediction:[26,3,1,""]},"opennmt.models.transformer":{Transformer:[27,2,1,""]},"opennmt.models.transformer.Transformer":{__init__:[27,3,1,""]},"opennmt.tokenizers":{add_command_line_arguments:[28,1,1,""],build_tokenizer:[28,1,1,""],tokenizer:[30,0,0,"-"]},"opennmt.tokenizers.tokenizer":{CharacterTokenizer:[30,2,1,""],SpaceTokenizer:[30,2,1,""],Tokenizer:[30,2,1,""]},"opennmt.tokenizers.tokenizer.Tokenizer":{__init__:[30,3,1,""],detokenize:[30,3,1,""],detokenize_stream:[30,3,1,""],initialize:[30,3,1,""],tokenize:[30,3,1,""],tokenize_stream:[30,3,1,""]},"opennmt.utils":{beam_search:[32,0,0,"-"],bridge:[33,0,0,"-"],cell:[34,0,0,"-"],decay:[35,0,0,"-"],evaluator:[36,0,0,"-"],hooks:[37,0,0,"-"],losses:[38,0,0,"-"],misc:[39,0,0,"-"],position:[40,0,0,"-"],reducer:[41,0,0,"-"],transformer:[42,0,0,"-"],vocab:[43,0,0,"-"]},"opennmt.utils.beam_search":{beam_search:[32,1,1,""],compute_batch_indices:[32,1,1,""],compute_topk_scores_and_seq:[32,1,1,""]},"opennmt.utils.bridge":{Bridge:[33,2,1,""],CopyBridge:[33,2,1,""],DenseBridge:[33,2,1,""],ZeroBridge:[33,2,1,""],assert_state_is_compatible:[33,1,1,""]},"opennmt.utils.bridge.Bridge":{__call__:[33,3,1,""]},"opennmt.utils.bridge.DenseBridge":{__init__:[33,3,1,""]},"opennmt.utils.cell":{build_cell:[34,1,1,""]},"opennmt.utils.decay":{noam_decay:[35,1,1,""]},"opennmt.utils.evaluator":{BLEUDetokEvaluator:[36,2,1,""],BLEUEvaluator:[36,2,1,""],ExternalEvaluator:[36,2,1,""],external_evaluation_fn:[36,1,1,""]},"opennmt.utils.evaluator.BLEUDetokEvaluator":{name:[36,3,1,""]},"opennmt.utils.evaluator.BLEUEvaluator":{name:[36,3,1,""],score:[36,3,1,""]},"opennmt.utils.evaluator.ExternalEvaluator":{__call__:[36,3,1,""],name:[36,4,1,""],score:[36,3,1,""]},"opennmt.utils.hooks":{CountersHook:[37,2,1,""],LogParametersCountHook:[37,2,1,""],SaveEvaluationPredictionHook:[37,2,1,""]},"opennmt.utils.hooks.CountersHook":{after_run:[37,3,1,""],before_run:[37,3,1,""],begin:[37,3,1,""]},"opennmt.utils.hooks.LogParametersCountHook":{begin:[37,3,1,""]},"opennmt.utils.hooks.SaveEvaluationPredictionHook":{__init__:[37,3,1,""],after_run:[37,3,1,""],before_run:[37,3,1,""],begin:[37,3,1,""],end:[37,3,1,""]},"opennmt.utils.losses":{cross_entropy_loss:[38,1,1,""],cross_entropy_sequence_loss:[38,1,1,""]},"opennmt.utils.misc":{add_dict_to_collection:[39,1,1,""],count_lines:[39,1,1,""],count_parameters:[39,1,1,""],extract_batches:[39,1,1,""],extract_prefixed_keys:[39,1,1,""],get_dict_from_collection:[39,1,1,""],item_or_tuple:[39,1,1,""],print_bytes:[39,1,1,""]},"opennmt.utils.position":{PositionEmbedder:[40,2,1,""],PositionEncoder:[40,2,1,""],make_positions:[40,1,1,""]},"opennmt.utils.position.PositionEmbedder":{__init__:[40,3,1,""],encode:[40,3,1,""]},"opennmt.utils.position.PositionEncoder":{__call__:[40,3,1,""],apply:[40,3,1,""],apply_one:[40,3,1,""],encode:[40,3,1,""],encode_sequence:[40,3,1,""]},"opennmt.utils.reducer":{ConcatReducer:[41,2,1,""],JoinReducer:[41,2,1,""],MultiplyReducer:[41,2,1,""],Reducer:[41,2,1,""],SumReducer:[41,2,1,""],pad_in_time:[41,1,1,""],pad_n_with_identity:[41,1,1,""],pad_with_identity:[41,1,1,""],roll_sequence:[41,1,1,""]},"opennmt.utils.reducer.ConcatReducer":{reduce:[41,3,1,""],reduce_sequence:[41,3,1,""]},"opennmt.utils.reducer.JoinReducer":{reduce:[41,3,1,""],reduce_sequence:[41,3,1,""]},"opennmt.utils.reducer.MultiplyReducer":{reduce:[41,3,1,""],reduce_sequence:[41,3,1,""]},"opennmt.utils.reducer.Reducer":{reduce:[41,3,1,""],reduce_sequence:[41,3,1,""],zip_and_reduce:[41,3,1,""]},"opennmt.utils.reducer.SumReducer":{reduce:[41,3,1,""],reduce_sequence:[41,3,1,""]},"opennmt.utils.transformer":{build_future_mask:[42,1,1,""],build_sequence_mask:[42,1,1,""],combine_heads:[42,1,1,""],drop_and_add:[42,1,1,""],feed_forward:[42,1,1,""],multi_head_attention:[42,1,1,""],norm:[42,1,1,""],scaled_dot_attention:[42,1,1,""],split_heads:[42,1,1,""],tile_sequence_length:[42,1,1,""]},"opennmt.utils.vocab":{Vocab:[43,2,1,""]},"opennmt.utils.vocab.Vocab":{__init__:[43,3,1,""],add:[43,3,1,""],add_from_text:[43,3,1,""],lookup:[43,3,1,""],prune:[43,3,1,""],serialize:[43,3,1,""],size:[43,4,1,""]},opennmt:{config:[6,0,0,"-"],constants:[7,0,0,"-"],decoders:[8,0,0,"-"],encoders:[12,0,0,"-"],inputters:[18,0,0,"-"],models:[22,0,0,"-"],tokenizers:[28,0,0,"-"],utils:[31,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"abstract":21,"byte":39,"case":[10,21,24],"class":[9,10,11,13,14,15,16,17,19,20,21,23,24,25,26,27,30,33,34,36,37,40,41,43],"default":[1,32,33,43],"export":[19,23,44,45],"final":[10,32],"function":[6,9,19,21,23,25,32,33,34,35,36,39,41,42,44],"int":32,"new":[28,32,43],"null":2,"return":[6,9,10,14,16,19,21,23,25,26,28,30,32,33,34,35,36,38,39,40,41,42,43,45],"static":[20,41],"true":[10,16,19,21,23,25,34,36,38,41],"void":2,"while":32,EOS:32,For:[1,2,19,25,46],Ids:32,THE:21,The:[1,2,6,9,10,11,13,14,16,17,19,20,21,23,24,25,26,27,30,32,33,34,35,36,37,38,39,40,41,42,43,45,46],Then:46,These:32,Yes:2,__call__:[23,33,36,40],__init__:[10,11,13,14,16,17,19,20,21,24,25,26,27,30,33,37,40,43],_io:30,_topk_:32,_topk_flag:32,_topk_scor:32,_topk_seq:32,about:[1,2,21,23,32],abs:[9,11,13,16,17,27,32,35,42],accept:[1,2],accordingli:[2,35],activ:[11,17,19,21,27,33,46],actual:1,adam_with_decai:1,add:[1,10,19,25,28,32,34,39,42,43],add_command_line_argu:28,add_dict_to_collect:39,add_from_text:43,add_process_hook:19,add_to_collect:30,added:[0,10,16,19,26,34],addit:[19,21,23,25,30],addition:[10,26],advanc:[2,3,45],aerob:2,after:[10,16,19,23,25,32,34],after_run:37,against:[21,36],aggress:45,align:[2,21,25],aliv:32,all:[2,10,14,19,39,41,44],allow:1,alpha:32,also:[2,19,38,46],altern:10,ani:[21,30],antich:2,api:44,apidoc:0,apo:2,appli:[11,13,17,19,21,23,27,33,40,42],apply_on:40,apt:45,arbitrarili:1,architectur:1,arg:28,argument:[10,16,23,28,34,35,37],ark:2,ark_to_record:2,arrai:[21,25,39],arxiv:[9,11,13,16,17,27,32,35,42],assert:33,assert_state_is_compat:33,asset:[30,44],asset_filepath:30,assign:[19,21],associ:[21,43],assum:[19,21,40],assumpt:32,asynchron:46,attach:21,attend:[10,42],attent:[1,10,11,17,27,34,42],attention_dropout:[11,17,27],attention_lay:[10,34],attention_mechan:34,attention_mechanism_class:10,attention_wrapp:10,attentionalrnndecod:10,attentionmechan:[10,34],automat:[0,44],avail:[1,44],averag:[24,38],average_in_tim:38,axi:41,base:[9,10,11,13,14,15,16,17,19,20,21,23,24,25,26,27,28,30,32,33,36,37,40,41,43],basic:10,batch:[23,30,32,39,41],batch_po:32,batch_siz:[23,32,41,42],batch_typ:23,beam:[9,32],beam_search:[5,31],beam_siz:32,beam_width:[9,10,11],beat:2,becaus:[32,44],been:[2,25],befor:10,before_run:37,begin:37,behavior:[21,45],being:32,beyond:2,bidirect:16,bidirectionalrnnencod:16,bin:[1,2,45,46],bind:45,bioe:25,bleu:[36,45],bleudetokevalu:36,bleuevalu:36,bool:32,boost:45,both:[16,26],bpe:30,bridg:[5,10,31],broadcast:42,bucket:23,bucket_width:23,budget:2,buffer:23,build:[34,40,42,45],build_cel:34,build_future_mask:42,build_sequence_mask:42,build_token:28,build_vocab:45,bureaucraci:2,cach:42,calcul:42,call:[19,36,39,45],callabl:[9,10,16,19,23,33,34,36,37,43],came:2,can:[1,2,10,19,23,28,32,44,45],candid:23,capac:2,captur:32,case_insensitive_embed:21,categor:9,cell:[5,10,16,31],cell_class:[10,16,34],chang:35,charact:[1,21,30],charactertoken:30,charconvembedd:21,checkpoint:46,chief:46,chief_host:46,chunk:25,classifi:24,classnam:23,client:32,cloth:2,cmake:45,code:[0,1],collabor:2,collect:[19,30,39],collection_nam:39,combin:41,combine_head:42,command:[1,28,46],common:[2,16],compat:33,compil:45,complet:32,complex:1,comput:[25,32,38,42,46],compute_batch_indic:32,compute_topk_scores_and_seq:32,concaten:[41,42],concatreduc:[14,16,19,41],config:[1,4,5,23,45],config_path:6,configur:[2,3,6,9,20,21,24,25,30,45],configuration_file_or_kei:[30,45],consid:[1,45],consist:45,constant:[4,5,9,35],constrain:23,construct:10,constructor:16,contain:[1,19,20,21,23,24,25,26,30,32,41,42,44],content:2,context:42,contrib:[10,23,34],contribut:1,conv_encod:[5,12],convencod:13,conveni:34,converg:9,convert:2,convolut:[1,13,21],coodin:32,coordin:32,copi:37,copybridg:33,correctli:25,correspond:14,could:25,count_lin:39,count_paramet:39,counter:37,countershook:37,cpp:44,creat:[2,19,23,32,40,43],crf:25,crf_decod:25,cross:38,cross_entropy_loss:38,cross_entropy_sequence_loss:38,cuda_visible_devic:46,cumul:9,current:[0,19,25,26,27,32,35,37,46],custom:[2,37,45],data:[1,3,18,19,20,21,24,25,26,27,44,45,46],data_fil:[19,20,21],dataset:19,decai:[5,23,31],decay_r:[23,35],decay_step:[23,35],decay_step_dur:23,decay_typ:23,decayed_learning_r:23,decod:[4,5,26,32,33,39,40,46],decode_length:32,decoded_id:32,decoder_zero_st:33,defin:[1,2,6,7,8,10,11,12,13,15,16,17,18,19,20,21,22,27,28,30,31,33,35,38,40,41,42],definit:44,delimit:30,deliv:2,densebridg:33,depend:[19,39,40],depth:[2,20,40,41,42],describ:[1,2,9,11,13,16,17,23,27,35,42],design:1,detail:[21,23,46],detok:[36,45],detoken:[30,45],detokenize_stream:30,dev:45,dict:[26,32,39],dict_:39,dictionari:[6,19,23,26,30,39,42],differ:32,dimens:[16,21,27,35,38,40,41,42],dir:44,direct:16,directli:9,directori:[19,21,36,44,46],disk:[43,44],displai:[2,46],divis:16,doc:0,docker:46,document:[3,46],doe:33,done:19,dot:42,down:2,drop:[10,11,13,16,17,19,21,27,34,42],drop_and_add:42,dropout:[10,11,13,16,17,19,21,27,34,42],dtype:42,duplic:[1,2],dure:[9,40,44,45,46],dynam:[1,9,26,40],dynamic_decod:[9,10,11],dynamic_decode_and_search:[9,10,11],each:[9,10,14,16,20,21,25,27,30,32,34,38,39,40,41,42,43,46],easi:32,echo:45,economi:2,ecosystem:46,element:[23,39,41],emb:40,embed:[1,9,10,11,18,19,21,46],embedd:21,embedding_fil:21,embedding_file_kei:21,embedding_file_with_head:21,embedding_s:[21,45],embedding_var:21,empti:[6,36],encod:[1,4,5,10,24,25,26,30,33,39,40],encode_sequ:40,encoder_st:33,end:[1,2,9,26,32,37,44],end_token:[9,10,11],enfr:45,ensur:45,entri:[21,43],entropi:38,environ:[44,45],eos_id:32,equal:32,essenti:45,estim:[9,14,19,23,34,38,42,46],etc:[1,25,46],european:2,evalu:[5,9,23,25,31,37,45,46],evaluators_nam:36,everi:14,every_n_sec:37,every_n_step:37,exampl:[1,2,19,23,44,45],execut:14,expand:32,expect:[2,20,44],expected_st:33,extent:2,extern:[30,36,44,45],external_evaluation_fn:36,externalevalu:36,extract:24,extract_batch:39,extract_prefixed_kei:39,factor:16,fals:[10,16,19,21,25,34,35,38],fashion:23,feat1:2,featm:2,featur:23,features_fil:23,feder:2,feed:[11,17,27,42],feed_forward:42,fetch:45,ffn_inner_dim:[11,17,27],field:[19,20],file:[0,2,6,19,20,21,23,24,25,30,37,39,43,44,45],filenam:[30,37,39,43],fill:[6,43],filter:13,find:45,finish:32,first:[32,40,46],fit:2,flag:[25,32],flag_bioes_tag:25,flatten:20,float32:[20,42],follow:[20,21,45],format:[21,23],forward:[11,17,19,27,42],found:[21,43],framework:46,freedom:1,frequenc:43,from:[0,1,2,9,10,11,13,17,18,20,21,23,24,27,32,33,37,39,42,43],full:[9,32],fund:2,futur:42,gather:[19,32],gcc:45,gener:[2,14,19,21,32,39,45],get:[39,45],get_dict_from_collect:39,get_embedding_fn:9,get_length:[19,20,21],get_optimizer_class:23,get_sampling_prob:9,get_serving_input_receiv:19,git:45,given:[19,26,32,45],global_step:[9,23,35],glove:21,gnmt:16,goal:2,gold:25,gold_flag:25,googl:[27,42],googlernnencod:16,gpu:46,gradient:46,graph:[19,21,28,39,44,45,46],graphkei:30,greater:[30,40],greedi:9,group:2,grow:32,grow_al:32,grow_finish:32,gym:2,hand:32,has:[1,2,20,25,32],have:[2,19,21,32,34,40],head:[2,11,17,27,42],header:21,hello:45,help:2,helper:[34,41],here:[32,45],hidden:[11,17,27,42],high:1,home:45,hook:[5,19,31,36],host:46,html:0,http:[9,11,13,16,17,27,32,35,42],ident:41,identifi:[2,25,43],identity_valu:41,ids:[9,26,32],ids_out:26,ignor:[21,25,35],implement:[1,2,18,32,37,42],implemet:32,impos:10,includ:[21,46],incompat:33,incorrectli:25,increas:[26,43],index:[2,32,40,43,44],infer:[1,9,10,11,44,45],inform:[33,44,46],inherit:[10,23],init:45,initi:[9,10,11,13,14,16,17,19,20,21,24,25,26,27,30,33,37,40,43],initial_id:32,initial_st:[9,10,11],inner:[10,11,16,17,27,34,42],inner_dim:42,input:[1,9,10,11,13,14,15,16,17,18,19,20,21,23,24,25,26,27,30,34,40,41,42,44],input_depth_kei:20,input_fn:23,input_stream:30,inputt:[1,2,4,5,24,25,26,27,45],insensit:[21,24],inspect:44,inspir:32,instanc:[1,16,46],instead:[9,45],instructor:2,int64:20,integ:[10,34],integr:46,interfac:32,introspect:32,invalid:[9,24,36],italian:2,item:32,item_or_tupl:39,iter:[9,21,39],its:[10,14,15,16,34,39,41,43],join:41,joinreduc:[14,41],kei:[1,2,19,20,21,24,25,26,30,39,42],kernel:13,kernel_s:[13,21],kill:2,know:44,known:[9,20],kubernet:46,label:[21,23,24,25,36,38],label_smooth:38,labels_fil:[23,36],labels_vocabulary_file_kei:[24,25],laid:2,last:[10,24],latest:44,layer:[10,11,13,16,17,25,27,34,42],learn:[1,23,35,46],learning_r:[23,35],learning_rate_decay_fn:23,legisl:2,length:[9,14,19,20,21,23,25,26,30,32,34,38,40,41,42],length_penalti:[9,10,11],level:1,libboost:45,like:[21,32,44,46],line:[1,2,18,21,24,25,28,39,43,46],linear:[9,11,17,33,42],list:[6,10,14,19,20,21,23,30,34,36,41,43,46],load:[6,30,43],load_config:6,load_model_modul:6,load_pretrained_embed:21,localhost:46,log:[9,19,21,32,36,37,46],log_dir:[19,21],log_prob:[9,32],logdir:46,logic:[18,33],logit:[9,10,32,38],logits_to_cum_log_prob:9,logparameterscounthook:37,look:44,lookup:[19,40,43],loop:46,loss:[5,31,46],lowercas:21,lstmcell:[10,16,34],luongattent:10,machin:46,made:[1,2],mai:32,main:[1,46],maintain:33,make:[0,23,32,45],make_dataset:[19,20,21],make_posit:40,manag:46,mani:[2,23],manual:44,mark:32,mask:42,master:2,match:[21,25],max:41,max_length:42,max_sequence_length:41,max_siz:43,max_word_length:21,maximum:[9,23,40,42,43],maximum_features_length:23,maximum_iter:[9,10,11],maximum_labels_length:23,maximum_length:[40,42],maximum_posit:40,mean:[2,15,21],mean_encod:[5,12],meanencod:15,mechan:10,memori:[9,10,11,42],memory_sequence_length:[9,10,11],merg:[14,16,19,40,41],merge_config:1,meta:21,metadata:[19,20,21,23,30],method:[19,32],metric:25,min_frequ:43,minim:15,minimum:43,minimum_learning_r:23,misc:[5,31],miss:25,mix:[1,19],mixedinputt:[1,19],mkdir:45,modal:1,mode:[9,10,11,13,14,15,16,17,19,20,21,23,30,34,38,42],modekei:[9,14,19,23,34,38,42],model:[2,4,5,6,19,30,32,35,37,42,44,45],model_fn:23,modul:[1,4,5,8,12,18,22,28,31],more:[1,23,36,46],mostli:37,multi:[1,10,11,14,17,19,34,36,42,45],multi_head_attent:42,multiattentionalrnndecod:10,multiinputt:19,multipl:[10,14,19],multipli:41,multiplyreduc:41,must:[9,21,32,33,41],my_config:1,name:[2,23,24,25,26,27,30,32,35,36,39],nation:2,need:[32,44],neg:25,neither:21,nest:[9,19,32,41],newli:45,newlin:2,next:[10,23,32],noam_decai:35,node:44,non:6,none:[6,9,10,11,13,14,15,16,17,19,21,23,24,25,26,30,32,33,34,35,36,37,39,40,42,43],nor:21,norm:[42,46],normal:42,note:44,now:45,num_head:[11,17,27,42],num_lay:[10,11,13,16,17,27,34],num_oov_bucket:21,num_output:21,num_parallel_process_cal:23,num_unit:[10,11,13,16,17,27,34,42],number:[9,10,11,13,16,17,21,23,27,32,34,37,39,42,43],numpi:[21,25,39],object:[9,11,13,14,16,17,19,21,23,27,30,33,36,40,41,43],observ:32,occur:36,off:32,offset:41,onc:19,one:[10,19,21,24,25,36,40],onli:[0,10,25,26,27,45],onmt:45,open:46,opennmt:[0,1,2,3,44,45,46],opennmt_token:[5,28],opennmttoken:45,oper:32,ops:[10,16,32,34],opt:23,optim:[1,21,23],option:[1,2,9,21,23,37,40,42,45],order:32,org:[9,11,13,16,17,27,32,35,42],other:[1,21,44],otherwis:[14,21,30,40,42],output:[9,10,11,13,14,16,17,21,23,24,26,27,30,32,34,36,37,39,42,44],output_dir:[36,37],output_fil:37,output_is_attent:10,output_stream:30,outputs_reduc:14,over:13,overrid:10,packag:[0,3,4,45],pad:[19,32,40,41],pad_in_tim:41,pad_n_with_ident:41,pad_with_ident:41,padded_batch:19,padded_shap:19,padding_length:41,pair:19,parallel:[19,23],parallelencod:[1,14],parallelinputt:[1,2,19],param:[23,24,25,26],paramet:[6,9,10,11,13,14,16,17,19,20,21,23,24,25,26,27,30,32,33,34,35,36,37,38,39,40,41,42,43,46],parameter:33,parliament:2,parser:28,part:[1,45],pass:[10,33],past:23,path:[6,21,36,43],pattern:32,pbtxt:21,penal:32,penalti:[9,32],per:[21,24,25],period:44,perl:[36,45],permit:32,person:2,pilat:2,pip:0,plugin:45,portal:3,pos:32,posit:[5,11,13,17,25,27,31,42],position_encod:[11,13,17,27],positionembedd:[11,13,17,27,40],positionencod:[11,13,17,27,40],possibl:[6,9,19,32,41],post_evaluation_fn:37,postur:2,pre:42,precis:25,predefin:1,predict:[23,24,25,26,36,37,45],predicted_flag:25,predicted_id:9,predictions_path:36,prefer:1,prefetch:23,prefetch_buffer_s:23,prefix:[2,26,32,39],prepar:[2,19,26,45],prerog:2,pretrain:21,previou:42,print:[23,39],print_byt:39,print_predict:[23,24,25,26],prioriti:1,probabl:[9,10,11,13,16,17,19,21,27,32,34,38,42,46],process:[19,21,23,24,25,26,27,32],produc:25,product:42,program:2,project:[7,39,42],projector_config:21,provid:[1,3,21,32,44,45],provis:2,prune:43,ps_host:46,purchas:2,purpos:2,py_func:44,pyramidalrnnencod:16,python:[0,1,2,6,10,16,30,34,37,43,44,45,46],pythonpath:45,queri:[9,42],quot:2,rais:[9,16,21,23,24,26,30,33,34,36],rank:30,rate:[23,35,46],raw:[18,19],reach:32,read:[9,20,39],read_prob:9,realis:2,recal:25,receiv:19,recommonmark:0,record:[2,20,32],record_inputt:[5,18],reduc:[5,14,16,19,31,38,40],reduce_sequ:41,reduced_input:41,reduced_length:41,reduct:16,reduction_factor:16,refer:[33,45],reflect:26,refus:2,regist:[21,30],rel:[6,21],relat:[1,6,36,42],relu:[11,17,27],relu_dropout:[11,17,27],remov:[0,19],remove_data_field:19,renam:0,replac:10,replic:42,repositori:45,repres:32,requir:[19,30,32,44,45],reserv:40,residu:42,residual_connect:[10,16,34],resolv:23,respect:41,result:[21,36],retain:41,reusabl:1,rightmost:1,rip:2,rnn:[1,10,16,34],rnn_cell_impl:[10,16,34],rnn_decod:[5,8],rnn_encod:[5,12],rnncell:34,rnndecod:10,rnnencod:16,roll_sequ:41,run:[0,32,36,44,46],run_context:37,run_valu:37,sai:[2,32],same:[14,19,34,40,41],sampl:[1,9,23,45,46],sample_buffer_s:23,sampling_prob:[9,10,11],save:[16,36,37,43,45],save_vocab:45,saved_model:44,saved_model_cli:44,saveevaluationpredictionhook:[36,37],scale:[2,35,42],scaled_dot_attent:42,schedul:9,schedule_typ:9,scheme:25,scor:32,score:[32,36,42],scores_to_gath:32,script:[1,2,43,44],seach:32,search:[9,32],see:[1,2,19,45,46],select:[23,28,46],self:[1,11,17,27],self_attention_decod:[5,8],self_attention_encod:[5,12],selfattentiondecod:11,selfattentionencod:17,semant:35,senior:2,sentenc:[2,30,32,43],separ:[1,2],seq2seq:[10,26,34],seq:32,seq_length:32,seqclassifi:24,seqtagg:25,sequenc:[9,13,14,16,18,21,23,24,25,26,27,30,32,38,40,41,42],sequence_classifi:[5,22],sequence_length:[9,10,11,13,14,15,16,17,21,25,30,38,40,41,42],sequence_tagg:[5,22],sequence_to_sequ:[5,22,27],sequenceclassifi:24,sequencerecordinputt:[2,20],sequencetagg:25,sequencetosequ:[26,27,45],sequenti:[14,32],sequentialencod:[1,14],serial:[2,30,43,44],serv:[3,19,23],server:46,serving_default:44,serving_input_fn:23,servinginputreceiv:[19,23],session:37,session_run_hook:37,sessionrunhook:37,set:[1,2,9,19,21,23,30,33,39,40,42,45,46],set_data_field:19,setup:19,sever:[14,19,46],shape:[9,14,19,20,21,40,41,42],share:27,shell:46,shift:[26,41],shift_target_sequ:26,shortcut:40,shoud:32,should:[1,2,26,30,46],show:44,signatur:[19,23],signature_def:44,simpl:[10,15,16,19,21,37],simpli:[1,46],simplifi:2,singl:[1,39,41],site:2,size:[9,13,21,23,32,33,40,42,43,45],sleep:2,smooth:38,soldier:2,some:[1,44],sourc:[1,2,6,9,10,11,13,14,15,16,17,19,20,21,23,24,25,26,27,28,30,32,33,34,35,36,37,38,39,40,41,42,43,46],source_inputt:[26,27,45],source_tokenizer_config:45,source_words_vocabulari:45,space:[2,21,30],spacetoken:[21,30],special:43,special_token:43,specif:19,speed:46,sphinx:0,sphinx_rtd_them:0,split:[21,30,42],split_head:42,src:[2,44],staircas:[23,35],standard:[26,30],start:[9,21,23,26,32,43,46],start_decay_step:23,start_token:[9,10,11],state:[2,9,10,14,16,32,33],states_reduc:14,states_to_gath:32,stdout:[30,39],step:[9,10,23,32,35,36,37],stepcounterhook:37,stop:26,store:32,str_as_byt:39,strageti:23,stream:[23,24,25,26,30,39],stretch:2,stride:21,string:[23,25,28,30,32,39,43],structur:[19,41],submodul:[4,45],subpackag:4,sudo:45,suffix:[26,37],sum:41,summar:37,summari:46,summary_writ:37,sumreduc:[16,40,41],support:[25,26,27,30,44,46],sybmol:32,symbol:32,symbols_to_logits_fn:32,synchron:46,synergi:2,sys:39,tabl:[19,40],table_initi:19,tag:25,tag_set:44,tagger:25,tagging_schem:25,take:[9,10,15,16,32,34,37],target:[2,9,26,27],target_inputt:[26,27,45],target_tokenizer_config:45,target_words_vocabulari:45,task:46,task_index:46,task_typ:46,templat:1,tensor:[9,19,20,21,26,28,30,32,39,40,41,42],tensorboard:[21,46],tensorflow:[10,16,34,37,44,46],term:2,test:[0,45],text:[18,21,30,43,44,45],text_inputt:[5,18,26,27],textinputt:[2,21,45],textiowrapp:30,tfdbg:32,tfrecord:[2,20],tgt:44,than:[30,40],thei:[1,2],them:2,thi:[2,3,10,19,21,23,24,25,26,27,32,36,37,39,40,44],thing:32,third_parti:45,thoughout:7,three:32,throughout:39,tile:42,tile_sequence_length:42,time:[16,20,32,38,40,41,42],titl:2,toi:[1,2,44],token:[2,3,4,5,9,21,23,26,43,44],tokenize_stream:30,tokenize_text:45,tokenizer_config:45,tokens_to_char:21,tokp_gathered_scor:32,told:2,tool:45,top:32,topk:32,topk_finished_flag:32,topk_gathered_scor:32,topk_seq:32,total:39,train:[1,2,3,9,10,11,13,14,15,16,17,19,21,23,37,38,44,45],train_and_evalu:46,train_features_fil:2,train_source_1:2,train_source_2:2,train_source_3:2,trainabl:[21,37,39],trainer:2,transform:[5,11,17,18,19,20,21,22,28,31,33],transform_data:19,tupl:[9,14,25,32,39,41,42],two:2,txt:[2,44,45],type:[9,23,32,42,44],typeerror:[9,26],typic:44,ubuntu:45,under:45,unicod:[21,30],unidirectionalrnnencod:16,uniqu:32,unit:[10,11,13,16,17,19,21,27,34,42],unknown:21,unless:2,unscal:38,unsur:1,unused_data:19,updat:[19,26,45],url:46,usag:2,use:[0,23,30,32,39,42,44,45],used:[1,2,7,9,16,25,30,32,36,40,44,45],user:[1,19,23,30,46],uses:46,using:[1,2,10,11,16,17,32,44,45],usual:[9,19,40],utf:30,util:[4,5,10,11,13,14,16,17,19,23,27],val1:21,val2:21,valm:21,valu:[1,7,9,19,20,23,32,38,39,40,41,42,43],valueerror:[9,16,21,23,24,30,33,34,36],variabl:[20,21,44],variant:21,variou:[31,39],vector:[18,21,24,42],version:[30,43],view:39,visual:[19,21,32,46],visualize_embed:21,vocab:[5,31,32,44,45],vocab_s:[9,10,11,32],vocabulari:[9,21,24,25,43,44,45],vocabulary_fil:21,vocabulary_file_kei:[21,45],vocabulary_s:21,volatil:19,warmup:35,watch:32,weight:[9,44],welcom:1,when:[2,9,16,23,25,32,44],where:[2,9,40,41,42,43],whether:32,which:[2,10,19,20,23,32,34,36,37,41],whose:2,width:[9,23],window:21,with_head:21,within:19,word1:21,word2:21,word:[1,9,21,46],wordembedd:[21,26,27,45],wordn:21,work:[1,28],worker:46,worker_host:46,workflow:45,world:45,wrapper:10,write:43,yaml:[1,2,30,45],yml:[1,45],you:[1,2,44],your:[2,44,45],zerobridg:[10,33],zip:41,zip_and_reduc:41},titles:["Documentation","Configuration","Data","Overview","opennmt","opennmt package","opennmt.config module","opennmt.constants module","opennmt.decoders package","opennmt.decoders.decoder module","opennmt.decoders.rnn_decoder module","opennmt.decoders.self_attention_decoder module","opennmt.encoders package","opennmt.encoders.conv_encoder module","opennmt.encoders.encoder module","opennmt.encoders.mean_encoder module","opennmt.encoders.rnn_encoder module","opennmt.encoders.self_attention_encoder module","opennmt.inputters package","opennmt.inputters.inputter module","opennmt.inputters.record_inputter module","opennmt.inputters.text_inputter module","opennmt.models package","opennmt.models.model module","opennmt.models.sequence_classifier module","opennmt.models.sequence_tagger module","opennmt.models.sequence_to_sequence module","opennmt.models.transformer module","opennmt.tokenizers package","opennmt.tokenizers.opennmt_tokenizer module","opennmt.tokenizers.tokenizer module","opennmt.utils package","opennmt.utils.beam_search module","opennmt.utils.bridge module","opennmt.utils.cell module","opennmt.utils.decay module","opennmt.utils.evaluator module","opennmt.utils.hooks module","opennmt.utils.losses module","opennmt.utils.misc module","opennmt.utils.position module","opennmt.utils.reducer module","opennmt.utils.transformer module","opennmt.utils.vocab module","Serving","Tokenization","Training"],titleterms:{autodoc:0,beam_search:32,bridg:33,build:0,cell:34,config:6,configur:1,constant:7,conv_encod:13,data:2,decai:35,decod:[8,9,10,11],depend:0,distribut:46,document:0,encod:[12,13,14,15,16,17],evalu:36,file:1,format:2,hook:37,input:2,inputt:[18,19,20,21],instal:[0,45],local:0,loss:38,mean_encod:15,misc:39,model:[1,22,23,24,25,26,27],modul:[6,7,9,10,11,13,14,15,16,17,19,20,21,23,24,25,26,27,29,30,32,33,34,35,36,37,38,39,40,41,42,43],monitor:46,multipl:1,note:45,opennmt:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],opennmt_token:29,overview:3,packag:[5,8,12,18,22,28,31],parallel:2,paramet:1,posit:40,record_inputt:20,reduc:41,regist:0,rnn_decod:10,rnn_encod:16,self_attention_decod:11,self_attention_encod:17,sequence_classifi:24,sequence_tagg:25,sequence_to_sequ:26,serv:44,sourc:0,submodul:[5,8,12,18,22,28,31],subpackag:5,text:2,text_inputt:21,token:[28,29,30,45],train:46,transform:[27,42],usag:45,util:[31,32,33,34,35,36,37,38,39,40,41,42,43],vector:2,vocab:43}})