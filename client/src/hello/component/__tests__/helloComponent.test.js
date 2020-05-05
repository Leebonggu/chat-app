import React from 'react';
import renderer from 'react-test-renderer';
import HelloComponent from '../helloComponent';

test('should render HelloComponent', () => {
  const component = renderer.create(<HelloComponent />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
