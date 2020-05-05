import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import NotFound from '../notFound';

const mockStore = configureStore([thunk]);

test('NotFound Container should render given props', () => {
  const initialState = {
    app: {
      isAuthenticated: false
    }
  };
  const store = mockStore(initialState);
  const mockFunc = jest.fn();
  const component = renderer.create(
    <Provider store={store}>
      <NotFound 
        goToLanding={mockFunc}
        goToLogin={mockFunc}
        isAuthenticated={false}
      />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
