import { lazy } from 'react';

const admin = lazy(() => import('.'));

const adminRouteConstants = {
  admin: '/관리자'
};

const adminRouteConfig = [
  {
    path: adminRouteConstants.admin,
    component: admin,
    exact: true
  }
];

export { adminRouteConstants, adminRouteConfig };
