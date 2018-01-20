// @flow
import React from 'react';
import Button from 'material-ui/Button';
import { Form } from '../../components/Form/Form';
import { UserDialogContainer } from '../../containers/User/UserDialog/UserDialogContainer';

type UserLoginScreenProps = {
  isAuthenticatePending: boolean,
  userLogin: ({ email: string, password: string }) => any,
  openDialog: () => any
};

export const UserLoginScreen = (props: UserLoginScreenProps) => (
  <div>
    <Form
      initialState={{ email: '', password: '' }}
      inputs={[
        { id: 'email', label: 'Email', type: 'text' },
        { id: 'password', label: 'Mot de passe', type: 'password' }
      ]}
      onSubmit={({ email, password }) => props.userLogin({ email, password })}
      onSubmitLabel="S'authentifier"
      isSubmitDisabled={props.isAuthenticationPending}
    />
    <Button onClick={props.openDialog}>S'inscrire</Button>
    <UserDialogContainer />
  </div>
);
