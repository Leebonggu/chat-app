import { combineReducers } from 'redux';

import hello from './hello';

const reducers = {
  hello: hello || (() => '')
};

export default (state = {}, action) => {
  return combineReducers(reducers)(state, action);
};
