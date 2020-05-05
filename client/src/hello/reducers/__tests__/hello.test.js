import hello from '../hello';
import {
  INITIALIZE_HELLO,
} from '../../actions/hello';

describe('hello reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      /* add state */
    };
  });
  afterEach(() => {
    hello(initialState, { type: INITIALIZE_HELLO });
  });

  test('INITIALIZE_', () => {
    const action = {
      type: INITIALIZE_HELLO
    };
    const expected = { ...initialState };
    expect(hello(initialState, action)).toEqual(expected);
  });
});
