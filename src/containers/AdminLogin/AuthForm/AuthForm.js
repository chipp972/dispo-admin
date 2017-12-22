// @flow
import React from 'react';
import Button from 'material-ui/Button';
import { Form } from '../../../components/Form/Form';

type AuthFormProps = {
  email: string,
  canSendCode: boolean,
  authenticate: (email: string, code: string) => any,
  sendCode: (email: string) => any,
  resetEmail: () => any
};

export const AuthForm = (props: AuthFormProps) => (
  <div>
    <Form
      initialState={{ email: props.email, code: '', disabled: true }}
      inputs={[
        { id: 'email', label: 'Email', type: 'text', disabled: true },
        { id: 'code', label: 'Code', type: 'text' }
      ]}
      onSubmit={({ email, code }) => props.authenticate(email, code)}
      onSubmitLabel="S'authentifier"
    />
    <Button
      raised
      color={props.canSendCode ? 'default' : 'contrast'}
      disabled={!props.canSendCode}
      onClick={() => props.sendCode(props.email)}
    >
      Renvoyer le code
    </Button>
    <Button onClick={() => props.resetEmail()}>ANNULER</Button>
  </div>
);
