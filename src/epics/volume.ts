import { ActionsObservable, ofType } from 'redux-observable';
import { setMuted, SetMutedAction } from '../actions/muted';
import { SetVolumeAction } from '../actions/volume';
import { ActionKeys } from '../types';

export const setVolumeEpic = (action$: ActionsObservable<SetVolumeAction>) =>
  action$.ofType(ActionKeys.SET_VOLUME).map((action) => {
    return setMuted(action.payload <= 0);
  });
