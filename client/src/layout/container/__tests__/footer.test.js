import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import Footer from '../footer.version2';

const mockStore = configureStore([thunk]);
jest.mock('../../../lib/components/Grid', () => ({ Grid: 'Grid' }));
jest.mock('../../../common/link', () => 'Link');
jest.mock('../../../common/accordion', () => ({
  Accordion: 'Accordion',
  AccordionItem: 'AccordionItem'
}));

test('Footer Container should render given props', () => {
  const initialState = {};
  const store = mockStore(initialState);
  const component = renderer.create(
    <Provider store={store}>
      <Footer />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
