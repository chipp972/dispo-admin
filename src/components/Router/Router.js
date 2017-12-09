// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginScreenWithAuth } from '../../authentication/LoginContainer';
import { AdminScreenWithState } from '../../adminUI/AdminUIContainer';

type RouterProps = {};

export const Router = (props: RouterProps) => (
  <Switch>
    <Route exact path="/" component={AdminScreenWithState} />
    <Route path="/login" component={LoginScreenWithAuth} />
  </Switch>
);
