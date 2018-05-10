import { ActionKeys } from '../types';

export type SetCodeValueAction = {
  type: ActionKeys.SET_CODE_VALUE;
  payload: string;
};
export type SetCodeErrorAction = {
  type: ActionKeys.SET_CODE_ERROR;
  payload: null | Error;
};
export type SetCodeFnAction = {
  type: ActionKeys.SET_CODE_FN;
  payload: null | Function;
};

export const setCodeValue = (codeString: string): SetCodeValueAction => ({
  type: ActionKeys.SET_CODE_VALUE,
  payload: codeString
});

export const setCodeError = (codeError: null | Error): SetCodeErrorAction => ({
  type: ActionKeys.SET_CODE_ERROR,
  payload: codeError
});

export const setCodeFn = (codeFn: null | Function): SetCodeFnAction => ({
  type: ActionKeys.SET_CODE_FN,
  payload: codeFn
});
