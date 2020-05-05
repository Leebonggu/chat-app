import { combineReducers } from 'redux';
/* PLOP_INJECT_IMPORT */
import hello from './hello/reducers/helloReducer';
import layout from './layout/reducers/layoutReducer';

const rootReducer = {
  layout,
  /* PLOP_INJECT_REDUCER */
	hello,
};

export default () => combineReducers({
  ...rootReducer,
});
