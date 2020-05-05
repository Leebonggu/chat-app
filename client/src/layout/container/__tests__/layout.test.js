import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import Layout from '../layout';

const mockStore = configureStore([thunk]);
jest.mock('../../../lib/components/Grid', () => ({ Grid: 'Grid' }));
jest.mock('../footer.version2.js', () => 'Footer');
jest.mock('../header', () => 'Header');

test('Layout Container should render given props', () => {
  const initialState = {};
  const store = mockStore(initialState);
  const component = renderer.create(
    <Provider store={store}>
      <Layout>Test</Layout>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
