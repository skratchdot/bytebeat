import { ActionKeys, AnalyserData } from '../types';

export type SetAnalyserDataAction = {
  type: ActionKeys.SET_ANALYSER_DATA;
  payload: AnalyserData;
};

export const setAnalyserData = (
  frequencyData: Uint8Array,
  timeDomainData: Uint8Array
): SetAnalyserDataAction => ({
  type: ActionKeys.SET_ANALYSER_DATA,
  payload: {
    frequencyData,
    timeDomainData
  }
});
