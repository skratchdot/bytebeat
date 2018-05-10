import * as Babel from 'babel-standalone';
import { ActionsObservable, ofType } from 'redux-observable';
import {
  setCodeError,
  SetCodeErrorAction,
  setCodeFn,
  SetCodeFnAction,
  SetCodeValueAction
} from '../actions/code';
// import { delay, mapTo } from 'rxjs/operators';
import { ActionKeys } from '../types';

export const codeValueEpic = (
  action$: ActionsObservable<
    SetCodeValueAction | SetCodeErrorAction | SetCodeFnAction
  >
) =>
  action$.ofType(ActionKeys.SET_CODE_VALUE).map((action) => {
    try {
      const args = ['t'];
      let code = '';
      if (action.payload !== '') {
        const returnStatement = `return (${action.payload});`;
        const result = Babel.transform(`(function (t) {${returnStatement}})`, {
          comments: false
        }).code;
        code = result.slice(18, result.length - 4);
      }
      const fn = new Function(...args, code);
      return setCodeFn(fn);
    } catch (err) {
      if (err._babel) {
        let msg = err.message.split('(')[0];
        let { line, column } = err.loc;
        if (line === 1) {
          column -= 23;
        }
        return setCodeError(new Error(`${msg} (${line}:${column})`));
      }
      return setCodeError(err);
    }
  });

export const codeFnEpic = (action$: ActionsObservable<SetCodeFnAction>) =>
  action$
    .ofType(ActionKeys.SET_CODE_FN)
    .filter((action) => typeof action.payload === 'function')
    .map(() => setCodeError(null));
