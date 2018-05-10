import { ActionsObservable, ofType } from 'redux-observable';
import { setCounter, SetCounterAction } from '../actions/counter';
import { StopPlayingAction } from '../actions/playing';
import { ActionKeys } from '../types';

export const stopPlayingEpic = (
  action$: ActionsObservable<StopPlayingAction>
) =>
  action$.ofType(ActionKeys.STOP_PLAYING).map((action) => {
    return setCounter(0);
  });
