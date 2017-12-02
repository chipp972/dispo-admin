// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AdminScreenWithAPI } from '../../dataAPI/DataAPIContainer';
import { LoginScreenWithAuth } from '../../authentication/LoginContainer';

type RouterProps = {};

export const Router = (props: RouterProps) => (
  <Switch>
    <Route exact path="/" component={AdminScreenWithAPI} />
    <Route path="/login" component={LoginScreenWithAuth} />
  </Switch>
);
