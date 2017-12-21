// @flow
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginScreenContainer } from '../../screens/LoginScreen/LoginScreenContainer';
import { AdminScreenContainer } from '../../screens/AdminScreen/AdminScreenContainer';

type RouterProps = {
  isAuthenticated: boolean
};

export const Router = (props: RouterProps) => {
  return props.isAuthenticated ? (
    <Switch>
      <Route path="/" component={AdminScreenContainer} />
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/login" component={LoginScreenContainer} />
      <Redirect to="/login" />
    </Switch>
  );
};
