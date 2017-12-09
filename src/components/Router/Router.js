// @flow
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginScreenWithAuth } from '../../containers/LoginContainer';
import { AdminScreenWithState } from '../../containers/AdminUIContainer';

type RouterProps = {
  isAuthenticated: boolean
};

export const Router = (props: RouterProps) => {
  return props.isAuthenticated ? (
    <Switch>
      <Route path="/" component={AdminScreenWithState} />
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/login" component={LoginScreenWithAuth} />
      <Redirect to="/login" />
    </Switch>
  );
};
