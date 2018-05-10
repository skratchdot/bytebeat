import { ActionKeys, Example } from '../types';

export type SetSelectedExampleAction = {
  type: ActionKeys.SET_SELECTED_EXAMPLE;
  payload: Example;
};
export type SetExampleDropdownVisibleAction = {
  type: ActionKeys.SET_EXAMPLE_DROPDOWN_VISIBLE;
  payload: boolean;
};

export const setSelectedExample = (
  example: Example
): SetSelectedExampleAction => ({
  type: ActionKeys.SET_SELECTED_EXAMPLE,
  payload: example
});

export const setExampleDropdownVisible = (
  isVisible: boolean
): SetExampleDropdownVisibleAction => ({
  type: ActionKeys.SET_EXAMPLE_DROPDOWN_VISIBLE,
  payload: isVisible
});
