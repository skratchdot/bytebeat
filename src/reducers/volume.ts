import { SetVolumeAction } from '../actions/volume';
import { ActionKeys, Volume } from '../types';

export default (state: Volume = 0.35, action: SetVolumeAction) => {
  switch (action.type) {
    case ActionKeys.SET_VOLUME: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
