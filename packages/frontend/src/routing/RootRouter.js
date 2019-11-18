// @flow

import React from 'react';
import type { ComponentType } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { App } from './App';
import { BarbersList } from './barbers/BarbersList';
import { ServicesList } from './services/ServicesList';
import { CreateEventForm } from './events/CreateEventForm';
import { Test } from './test/Test';
import { Login } from './auth/Login';
import { SignUp } from './auth/SignUp';
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

const Empty = () => <div>Empty space</div>;

export const RootRouter = withCookies((props: any) => {
  const { allCookies } = props;
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          {/* Put new routes here */}
          <DefaultRoute path="/booking" component={CreateEventForm} exact />
          <DefaultRoute path="/services" component={ServicesList} exact />
          <DefaultRoute path="/barbers" component={BarbersList} exact />
          <DefaultRoute path="/" component={App} exact />
          <DefaultRoute path="/test" component={Test} exact />
          {allCookies.token && <Redirect from="/login" to="/" exact />}
          <DefaultRoute path="/login" component={Login} exact />
          {allCookies.token && <Redirect from="/signup" to="/" exact />}
          <DefaultRoute path="/signup" component={SignUp} exact />
          <Route path="*" component={Empty} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
});
