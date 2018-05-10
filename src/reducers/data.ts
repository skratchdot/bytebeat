import { SetSquareFirstAction, SetSquareRecentAction } from '../actions/data';
import { ActionKeys, Data } from '../types';

type Action = SetSquareFirstAction | SetSquareRecentAction;

export default (
  state: Data = {
    squareFirst: [],
    squareRecent: []
  },
  action: Action
) => {
  switch (action.type) {
    case ActionKeys.SET_SQUARE_FIRST: {
      return {
        ...state,
        squareFirst: action.payload
      };
    }
    case ActionKeys.SET_SQUARE_RECENT: {
      return {
        ...state,
        squareRecent: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
