import layout from '../layout';
import {
  INITIALIZE_LAYOUT,
} from '../../actions/layout';

describe('layout reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      /* add state */
    };
  });
  afterEach(() => {
    layout(initialState, { type: INITIALIZE_LAYOUT });
  });

  test('INITIALIZE_', () => {
    const action = {
      type: INITIALIZE_LAYOUT
    };
    const expected = { ...initialState };
    expect(layout(initialState, action)).toEqual(expected);
  });
});
