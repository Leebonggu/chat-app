import {
  INITIALIZE_LAYOUT,
} from '../actions/layout';

const initialState = {
  /* add state */
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_LAYOUT:
      return { ...initialState };
    default:
      return state;
  }
};
