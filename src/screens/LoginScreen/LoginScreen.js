// @flow
import React from 'react';
import { AuthFormContainer } from '../../containers/AdminLogin/AuthForm/AuthFormContainer';
import { LoginFormContainer } from '../../containers/AdminLogin/LoginForm/LoginFormContainer';

type LoginScreenProps = {
  isCodeReceived: boolean,
  canResendCode: boolean
};

export const LoginScreen = (props: LoginScreenProps) => {
  return props.isCodeReceived ? <AuthFormContainer /> : <LoginFormContainer />;
};
