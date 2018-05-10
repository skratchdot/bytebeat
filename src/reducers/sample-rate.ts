import { SetSampleRateAction } from '../actions/sample-rate';
import { ActionKeys, SampleRate } from '../types';

export default (state: SampleRate = 8000, action: SetSampleRateAction) => {
  switch (action.type) {
    case ActionKeys.SET_SAMPLE_RATE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
