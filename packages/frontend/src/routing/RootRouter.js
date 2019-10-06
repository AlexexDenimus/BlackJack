// @flow

import React from 'react';
import type { ComponentType } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';
//import { ConnectedRouter } from 'react-router-redux';
//import history from './history';
import { App } from './App';
import { BarbersList } from './barbers/BarbersList';
import { Test } from './test/Test';
import { ThemeProvider } from 'styled-components';
import { theme } from '../ui/theme';

type DefaultRouteProps = {
  path: string,
  exact?: boolean,
  component: ComponentType<any>,
};

const DefaultRoute = ({ path, exact, component: RouteComponent }: DefaultRouteProps) => (
  <Route
    exact={exact}
    path={path}
    render={(routeProps: ContextRouter) => <RouteComponent {...routeProps} />}
  />
);

export const RootRouter = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        {/* Put new redesigned routes here */}
        <DefaultRoute path="/barbers" component={BarbersList} exact />
        <DefaultRoute path="/" component={App} exact />
        <DefaultRoute path="/test" component={Test} exact />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);
