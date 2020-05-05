import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from './rootReducer';

export const history = createBrowserHistory();

export default function configureStore(initialState) {
  return createStore(rootReducer(history), initialState, applyMiddleware(thunk));
}
