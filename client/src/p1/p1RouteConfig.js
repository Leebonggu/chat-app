import { lazy } from 'react';

const p1 = lazy(() => import('.'));

const p1RouteConstants = {
  p1: '/p1'
};

const p1RouteConfig = [
  {
    path: p1RouteConstants.p1,
    component: p1,
    exact: true
  }
];

export { p1RouteConstants, p1RouteConfig };
