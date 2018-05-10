import { applyMiddleware, createStore, Middleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics/root';
import rootReducer from '../reducers/root';

export default (initialState: object = {}) => {
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const middleware: Middleware[] = [epicMiddleware];
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
  return store;
};
