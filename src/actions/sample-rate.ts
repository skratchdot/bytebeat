import { ActionKeys } from '../types';

export type SetSampleRateAction = {
  type: ActionKeys.SET_SAMPLE_RATE;
  payload: number;
};

export const setSampleRate = (sampleRate: number): SetSampleRateAction => ({
  type: ActionKeys.SET_SAMPLE_RATE,
  payload: sampleRate
});
