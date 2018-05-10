import {
  SetExampleDropdownVisibleAction,
  SetSelectedExampleAction
} from '../actions/examples';
import { ActionKeys, Example, ExampleState } from '../types';
import getExamples from '../util/get-examples';

const examples = getExamples();

type Action = SetSelectedExampleAction | SetExampleDropdownVisibleAction;

export default (
  state: ExampleState = {
    examples,
    selectedExample: examples[0],
    isExampleDropdownVisible: false
  },
  action: Action
) => {
  switch (action.type) {
    case ActionKeys.SET_SELECTED_EXAMPLE: {
      return {
        ...state,
        selectedExample: action.payload
      };
    }
    case ActionKeys.SET_EXAMPLE_DROPDOWN_VISIBLE: {
      return {
        ...state,
        isExampleDropdownVisible: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
