import { Suspense } from 'react';
import {
  Router as ReactRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Paths, routes } from './routes';
import { NotFoundPage } from './notFound';

import { history } from 'shared/history';
import { SuspenseFallback } from 'shared/suspenseFallback';

export const Router = () => {
  return (
    <ReactRouter history={history}>
      <Suspense fallback={<SuspenseFallback />}>
        <Switch>
          {routes.map((el) => (
            <Route
              key={el.path}
              exact={el.exact}
              path={el.path}
              component={el.component}
            />
          ))}
          <Route component={NotFoundPage} />
          <Redirect to={Paths.Home} />
        </Switch>
      </Suspense>
    </ReactRouter>
  );
};
