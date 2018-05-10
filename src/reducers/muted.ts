import { SetMutedAction, ToggleMutedAction } from '../actions/muted';
import { ActionKeys, Muted } from '../types';

type Action = ToggleMutedAction | SetMutedAction;

export default (state: Muted = false, action: Action) => {
  switch (action.type) {
    case ActionKeys.TOGGLE_MUTED: {
      return !state;
    }
    case ActionKeys.SET_MUTED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
