// @flow
import React from 'react';
import { Form } from '../../components/Form/Form';
import type { UserData } from 'dispo-api';
import type { InputDescription } from '../../components/Form/Form';

const inputs: InputDescription[] = [
  { id: 'email', label: 'Adresse e-mail', type: 'text' },
  { id: 'password', label: 'Mot de passe', type: 'password' },
  { id: 'lastName', label: 'Nom', type: 'text' },
  { id: 'firstName', label: 'Prenom', type: 'text' },
  { id: 'birthDate', label: 'Date de naissance', type: 'date' },
  { id: 'phoneNumber', label: 'Numero de telephone', type: 'text' },
  { id: 'address', label: 'Adresse', type: 'text' }
];

const defaultState: UserData = {
  email: '',
  password: '',
  lastName: '',
  firstName: '',
  birthDate: '1995-01-01',
  phoneNumber: '06',
  address: ''
};

type UserFormProps = {
  initialState?: UserData,
  isNew: boolean,
  submitAction: (formData: UserData) => any
};

export const UserForm = (props: UserFormProps) => (
  <Form
    initialState={props.initialState || defaultState}
    inputs={inputs}
    onSubmit={props.submitAction}
    onSubmitLabel={
      props.isNew ? 'CREER UN UTILISATEUR' : 'MODIFIER UN UTILISATEUR'
    }
  />
);
