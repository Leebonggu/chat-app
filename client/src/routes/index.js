import { p1RouteConstants } from '../p1/p1RouteConfig';
import { adminRouteConstants } from '../admin/adminRouteConfig'

const RouteConstant = {
  notfound: '/404',
  home: '/',
  ...p1RouteConstants,
  ...adminRouteConstants,
};

export default RouteConstant;
