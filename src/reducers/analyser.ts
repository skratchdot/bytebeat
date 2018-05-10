import { SetAnalyserDataAction } from '../actions/analyser';
import { ActionKeys, AnalyserData } from '../types';

export default (
  state: AnalyserData = {
    frequencyData: new Uint8Array([]),
    timeDomainData: new Uint8Array([])
  },
  action: SetAnalyserDataAction
) => {
  switch (action.type) {
    case ActionKeys.SET_ANALYSER_DATA: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
