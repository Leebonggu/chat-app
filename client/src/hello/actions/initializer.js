import { initializeHello } from './hello';

export default () => async dispatch => {
  await Promise.all([
    dispatch(initializeHello()),
  ]);
};
