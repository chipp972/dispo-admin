// @flow
import React from 'react';
import { Redirect } from 'react-router-dom';
import { AuthFormContainer } from '../containers/AuthFormContainer';
import { LoginFormContainer } from '../containers/LoginFormContainer';

type LoginScreenProps = {
  code: string,
  email: string,
  error: Error,
  isAuthenticated: boolean
};

export const LoginScreen = (props: LoginScreenProps) => {
  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  } else {
    return props.email.length > 0 ? (
      <AuthFormContainer />
    ) : (
      <LoginFormContainer />
    );
  }
};
