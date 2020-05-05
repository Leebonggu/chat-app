import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {
  initializeLayout,
  INITIALIZE_LAYOUT
} from '../layout';

const mockStore = configureStore([thunk]);

describe('layout action test', () => {
  let store;
  const initialState = {
    /* add state */
  };
  beforeEach(() => {
    store = mockStore(initialState);
  });
  afterEach(() => {
    store.dispatch(initializeLayout());
  });
  test('initializeLayout', () => {
    store.dispatch(initializeLayout());
    const actionTypes = store.getActions().map(action => action.type);
    expect(actionTypes.length).toEqual(1);
    expect(actionTypes).toContain(INITIALIZE_LAYOUT);
  });
});