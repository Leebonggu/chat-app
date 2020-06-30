import { lazy } from 'react';

const p1 = lazy(() => import('.'));

const p1RouteConstants = {
  p1: '/입장'
};

const p1RouteConfig = [
  {
    path: p1RouteConstants.p1,
    component: p1,
    exact: true
  }
];

export { p1RouteConstants, p1RouteConfig };

// username
// roomname 둘다주면???????????
// => admin 고정...