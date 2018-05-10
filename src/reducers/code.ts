import {
  SetCodeErrorAction,
  SetCodeFnAction,
  SetCodeValueAction
} from '../actions/code';
import { ActionKeys, Code } from '../types';

type Action = SetCodeErrorAction | SetCodeFnAction | SetCodeValueAction;

export default (
  state: Code = {
    value: '',
    error: null,
    fn: null
  },
  action: Action
) => {
  switch (action.type) {
    case ActionKeys.SET_CODE_VALUE: {
      return {
        ...state,
        value: action.payload
      };
    }
    case ActionKeys.SET_CODE_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    case ActionKeys.SET_CODE_FN: {
      return {
        ...state,
        fn: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
