import { lazy } from 'react';

const hello = lazy(() => import('./container/hello'));

const helloRouteConstants = {
  hello: '/hello'
};

const helloRouteConfig = [
  {
    path: helloRouteConstants.hello,
    component: hello,
    exact: true
  }
];

export { helloRouteConstants, helloRouteConfig };
