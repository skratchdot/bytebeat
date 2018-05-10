import { ActionKeys } from '../types';

export type SetVolumeAction = {
  type: ActionKeys.SET_VOLUME;
  payload: number;
};

export const setVolume = (volume: number): SetVolumeAction => ({
  type: ActionKeys.SET_VOLUME,
  payload: volume
});
