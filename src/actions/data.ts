import { ActionKeys, RGBA } from '../types';

export type SetSquareFirstAction = {
  type: ActionKeys.SET_SQUARE_FIRST;
  payload: Array<RGBA>;
};

export type SetSquareRecentAction = {
  type: ActionKeys.SET_SQUARE_RECENT;
  payload: Array<RGBA>;
};

export const setSqaureFirst = (data: Array<RGBA>): SetSquareFirstAction => ({
  type: ActionKeys.SET_SQUARE_FIRST,
  payload: data
});

export const setSqaureRecent = (data: Array<RGBA>): SetSquareRecentAction => ({
  type: ActionKeys.SET_SQUARE_RECENT,
  payload: data
});
