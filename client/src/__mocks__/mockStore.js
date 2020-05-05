import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createMemoryHistory } from 'history';

const mockStore = configureStore([thunk]);

export const history = createMemoryHistory('/');

export default { initialize: mockStore };
