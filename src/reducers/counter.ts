import { SetCounterAction } from '../actions/counter';
import { ActionKeys, Counter } from '../types';

export default (state: Counter = 0, action: SetCounterAction) => {
  switch (action.type) {
    case ActionKeys.SET_COUNTER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
