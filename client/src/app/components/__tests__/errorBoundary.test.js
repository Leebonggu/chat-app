import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import ErrorBoundary from '../errorBoundary';

const mockStore = configureStore([thunk]);

test('ErrorBoundary Container should render given props', () => {
  const initialState = {};
  const store = mockStore(initialState);
  const component = renderer.create(
    <Provider store={store}>
      <ErrorBoundary>
        <div />
      </ErrorBoundary>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
