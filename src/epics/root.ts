import { combineEpics } from 'redux-observable';
import { codeFnEpic, codeValueEpic } from './code';
import { setSelectedExampleEpic } from './examples';
import { stopPlayingEpic } from './playing';
import { setVolumeEpic } from './volume';

export default combineEpics(
  codeValueEpic,
  codeFnEpic,
  // @ts-ignore
  setSelectedExampleEpic,
  stopPlayingEpic,
  setVolumeEpic
);
