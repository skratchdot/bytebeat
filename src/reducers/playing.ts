import { StopPlayingAction, TogglePlayingAction } from '../actions/playing';
import { ActionKeys, Playing } from '../types';

export default (
  state: Playing = false,
  action: TogglePlayingAction | StopPlayingAction
) => {
  switch (action.type) {
    case ActionKeys.TOGGLE_PLAYING: {
      return !state;
    }
    case ActionKeys.STOP_PLAYING: {
      return false;
    }
    default: {
      return state;
    }
  }
};
