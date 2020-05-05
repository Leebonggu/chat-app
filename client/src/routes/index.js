/* PLOP_INJECT_CONSTANT_IMPORT */
import { helloRouteConstants } from '../hello/helloRouteConfig';

const RouteConstant = {
  notfound: '/404',
  home: '/',
  /* PLOP_INJECT_CONSTANT */
	...helloRouteConstants,
};

export default RouteConstant;
