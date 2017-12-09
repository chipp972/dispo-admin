// @flow
import React from 'react';
import { AuthForm } from './AuthForm';
import { LoginForm } from './LoginForm';

type LoginScreenProps = {
  email: string,
  code: string,
  error: Error,
  tokenId: string,
  token: string,
  expireAt: Date,
  isAuthenticated: boolean,
  sendCode: Function,
  authenticate: Function,
  retrieveToken: Function
};

export const LoginScreen = (props: LoginScreenProps) => {
  if (props.email.length > 0) {
    return <AuthForm email={props.email} authenticate={props.authenticate} />;
  } else {
    return <LoginForm sendCode={props.sendCode} />;
  }
};
