import { ActionKeys } from '../types';

export type ToggleMutedAction = {
  type: ActionKeys.TOGGLE_MUTED;
};
export type SetMutedAction = {
  type: ActionKeys.SET_MUTED;
  payload: boolean;
};

export const toggleMuted = (): ToggleMutedAction => ({
  type: ActionKeys.TOGGLE_MUTED
});

export const setMuted = (muted: boolean): SetMutedAction => ({
  type: ActionKeys.SET_MUTED,
  payload: muted
});
