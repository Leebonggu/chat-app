import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {
  initializeHello,
  INITIALIZE_HELLO
} from '../hello';

const mockStore = configureStore([thunk]);

describe('hello action test', () => {
  let store;
  const initialState = {
    /* add state */
  };
  beforeEach(() => {
    store = mockStore(initialState);
  });
  afterEach(() => {
    store.dispatch(initializeHello());
  });
  test('initializeHello', () => {
    store.dispatch(initializeHello());
    const actionTypes = store.getActions().map(action => action.type);
    expect(actionTypes.length).toEqual(1);
    expect(actionTypes).toContain(INITIALIZE_HELLO);
  });
});