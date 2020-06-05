import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import Routes from '.';
import { p1RouteConfig } from '../p1/p1RouteConfig';
import Spinner from '../common/spinner';

const NotFound = lazy(() => import('../app/notFound'));
const Landing = lazy(() => import('../app/landing'));

export const AllRoutes = [
	...p1RouteConfig,
];

export default () => (
  <Suspense fallback={<Spinner isAbsolute />}>
    <Switch>
      <Route path={Routes.home} component={Landing} exact />
      {AllRoutes.map((route, index) => (
        <Route key={`allroutes-${index + 1}`} {...route} />
      ))}
      <Route path={Routes.notfound} component={NotFound} />
      <Route render={() => <Redirect to={Routes.notFound} />} />
    </Switch>
  </Suspense>
);
