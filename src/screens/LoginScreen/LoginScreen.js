// @flow
import React from 'react';
import { AuthFormContainer } from '../../containers/AdminLogin/AuthForm/AuthFormContainer';
import { LoginFormContainer } from '../../containers/AdminLogin/LoginForm/LoginFormContainer';

type LoginScreenProps = {
  email: string
};

export const LoginScreen = (props: LoginScreenProps) => {
  return props.email.length > 0 ? (
    <AuthFormContainer />
  ) : (
    <LoginFormContainer />
  );
};
