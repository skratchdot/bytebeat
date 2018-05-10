import { ActionKeys } from '../types';

export type TogglePlayingAction = {
  type: ActionKeys.TOGGLE_PLAYING;
};

export type StopPlayingAction = {
  type: ActionKeys.STOP_PLAYING;
};

export const togglePlaying = (): TogglePlayingAction => ({
  type: ActionKeys.TOGGLE_PLAYING
});

export const stopPlaying = (): StopPlayingAction => ({
  type: ActionKeys.STOP_PLAYING
});
