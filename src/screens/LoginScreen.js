// @flow
import React from 'react';
import { AuthFormContainer } from '../containers/login/AuthFormContainer';
import { LoginFormContainer } from '../containers/login/LoginFormContainer';

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
