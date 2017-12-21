// @flow
import React from 'react';
import { Form } from '../../../components/Form/Form';

type LoginFormProps = {
  canSendCode: boolean,
  sendCode: (email: string) => any,
};

export const LoginForm = (props: LoginFormProps) => (
  <Form
    initialState={{ email: '' }}
    inputs={[{ id: 'email', label: 'Email', type: 'text' }]}
    onSubmit={({ email }) => props.sendCode(email)}
    onSubmitLabel="Envoyer le code"
    isSubmitDisabled={!props.canSendCode}
  />
);
