import { ActionKeys } from '../types';

export type SetCounterAction = {
  type: ActionKeys.SET_COUNTER;
  payload: number;
};

export const setCounter = (value: number): SetCounterAction => ({
  type: ActionKeys.SET_COUNTER,
  payload: value
});
