// @flow
import React from 'react';
import { Form } from '../../components/Form/Form';
import type { UserData, User } from 'dispo-api';
import type { InputDescription } from '../../components/Form/Form';

type UserFormProps = {
  initialState?: User,
  isModification: boolean,
  isUserDialogOpen: boolean,
  createUser: (formData: UserData) => any,
  updateUser: (formData: UserData) => any,
  closeDialog: () => any
};

const inputs: InputDescription[] = [
  { id: 'email', label: 'Adresse e-mail', type: 'text' },
  { id: 'password', label: 'Mot de passe', type: 'password' },
  { id: 'lastName', label: 'Nom', type: 'text' },
  { id: 'firstName', label: 'Prenom', type: 'text' },
  { id: 'birthDate', label: 'Date de naissance', type: 'date' },
  { id: 'phoneNumber', label: 'Numero de telephone', type: 'text' },
  { id: 'address', label: 'Adresse', type: 'text' }
];

const initialState: UserData = {
  email: '',
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
    inputs={inputs}
    onSubmit={(formData: UserData) => {
      props.isModification
        ? props.updateUser(formData)
        : props.createUser(formData);
      if (props.isUserDialogOpen) props.closeDialog();
    }}
    onSubmitLabel={`${
      props.isModification ? 'MODIFIER' : 'CREER'
    } UN UTILISATEUR`}
  />
);
