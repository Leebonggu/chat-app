import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import Routes from '.';
import Spinner from '../common/spinner';
/* PLOP_INJECT_IMPORT */
import { helloRouteConfig } from '../hello/helloRouteConfig';

const NotFound = lazy(() => import('../app/containers/notFound'));
const Landing = lazy(() => import('../app/containers/landing'));

const AllRoutes = [
  /* PLOP_INJECT_ROUTE */
	...helloRouteConfig,
];

export default () => (
  <Suspense fallback={<Spinner isAbsolute />}>
    <Switch>
      <Route path={Routes.home} component={Landing} exact />
      {AllRoutes.map((route, index) => (
        <Route key={`allroutes-${index + 1}`} {...route} />
      ))}
      <Route path={Routes.notfound} component={NotFound} />
      <Route render={() => <Redirect to={Routes.home} />} />
    </Switch>
  </Suspense>
);
