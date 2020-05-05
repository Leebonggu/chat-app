import { combineReducers } from 'redux';

import layout from './layout';

const reducers = {
  layout: layout || (() => '')
};

export default (state = {}, action) => {
  return combineReducers(reducers)(state, action);
};
