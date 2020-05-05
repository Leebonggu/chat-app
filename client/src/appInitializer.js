import layout from './layout/actions/initializer';
/* PLOP_INJECT_INITIALIZER_IMPORT */
import hello from './hello/actions/initializer';

export default () => async dispatch => {
  await Promise.all([
    dispatch(layout()),
    /* PLOP_INJECT_INITIALIZER */
		dispatch(hello()),
  ]);
};
