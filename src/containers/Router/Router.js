// @flow
import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { LoginScreenContainer } from '../../screens/LoginScreen/LoginScreenContainer';
import { UserLoginScreenContainer } from '../../screens/UserLoginScreen/UserLoginScreenContainer';
import { AdminScreenContainer } from '../../screens/AdminScreen/AdminScreenContainer';

type RouterProps = {
  isUserAuthenticated: boolean,
  isAdminAuthenticated: boolean
};

export const Router = (props: RouterProps) => {
  if (props.isAdminAuthenticated) {
    return (
      <Switch>
        <Route path="/" component={AdminScreenContainer} />
        <Redirect to="/" />
      </Switch>
    );
  } else if (props.isUserAuthenticated) {
    return (
      <Switch>
        <Route path="/" component={AdminScreenContainer} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/admin" component={LoginScreenContainer} />
        <Route path="/user" component={UserLoginScreenContainer} />
        <Redirect to="/admin" />
      </Switch>
    );
  }
};
