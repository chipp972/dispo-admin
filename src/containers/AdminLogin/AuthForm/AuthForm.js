// @flow
import React from 'react';
import { Form } from '../../../components/Form/Form';

type AuthFormProps = {
  email: string,
  authenticate: (email: string, code: string) => any
};

export const AuthForm = (props: AuthFormProps) => (
  <Form
    initialState={{ email: props.email, code: '' }}
    inputs={[
      { id: 'email', label: 'Email', type: 'text', disabled: true },
      { id: 'code', label: 'Code', type: 'text' }
    ]}
    onSubmit={({ email, code }) => props.authenticate(email, code)}
    onSubmitLabel="S'authentifier"
  />
);

