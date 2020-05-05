import { initializeLayout } from './layout';

export default () => async dispatch => {
  await Promise.all([
    dispatch(initializeLayout()),
  ]);
};
