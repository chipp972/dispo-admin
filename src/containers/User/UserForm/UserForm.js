// @flow
import React from 'react';
import { Form } from '../../../components/Form/Form';
import type { UserData, User } from 'dispo-api';

type UserFormProps = {
  initialState?: User,
  isUpdate: boolean,
  isDialogOpen: boolean,
  createUser: (formData: UserData) => any,
  updateUser: (formData: UserData) => any,
  closeDialog: () => any
};

const initialState: UserData = {
  email: '',
  oldPassword: '',
  password: '',
  lastName: '',
  firstName: '',
  birthDate: '1995-01-01',
  phoneNumber: '06',
  address: ''
};

export const UserForm = (props: UserFormProps) => (
  <Form
    initialState={props.initialState || initialState}
    inputs={[
      {
        id: 'email',
        label: 'Adresse e-mail',
        type: 'text',
        isValid: value => value && value.length > 0
      },
      {
        id: 'oldPassword',
        label: 'Ancien mot de passe',
        type: 'password',
        isFiltered: !props.isUpdate
      },
      { id: 'password', label: 'Mot de passe', type: 'password' },
      { id: 'lastName', label: 'Nom', type: 'text' },
      { id: 'firstName', label: 'Prenom', type: 'text' },
      { id: 'birthDate', label: 'Date de naissance', type: 'date' },
      { id: 'phoneNumber', label: 'Numero de telephone', type: 'text' },
      { id: 'address', label: 'Adresse', type: 'text' }
    ]}
    onSubmit={(formData: UserData) => {
      props.isUpdate ? props.updateUser(formData) : props.createUser(formData);
      if (props.isDialogOpen) props.closeDialog();
    }}
    onSubmitLabel={`${props.isUpdate ? 'MODIFIER' : 'CREER'} UN UTILISATEUR`}
  />
);
