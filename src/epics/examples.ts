import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { setCodeValue } from '../actions/code';
import {
  setExampleDropdownVisible,
  SetExampleDropdownVisibleAction,
  setSelectedExample,
  SetSelectedExampleAction
} from '../actions/examples';
import { setSampleRate } from '../actions/sample-rate';
import { ActionKeys } from '../types';

export const setSelectedExampleEpic = (
  action$: ActionsObservable<SetSelectedExampleAction>
) =>
  action$.ofType(ActionKeys.SET_SELECTED_EXAMPLE).flatMap((action) => {
    const samplerate = action.payload.samplerate || 8000;
    return Observable.concat([
      setExampleDropdownVisible(false),
      setCodeValue(action.payload.code0),
      setSampleRate(samplerate)
    ]);
  });
