import {
  INITIALIZE_HELLO,
} from '../actions/hello';

const initialState = {
  /* add state */
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_HELLO:
      return { ...initialState };
    default:
      return state;
  }
};
