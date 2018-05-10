import { combineReducers } from 'redux';
import analyser from './analyser';
import code from './code';
import counter from './counter';
import data from './data';
import examples from './examples';
import muted from './muted';
import playing from './playing';
import sampleRate from './sample-rate';
import volume from './volume';

export default combineReducers({
  analyser,
  code,
  counter,
  data,
  examples,
  muted,
  playing,
  sampleRate,
  volume
});
