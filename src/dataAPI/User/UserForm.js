// @flow
import React from 'react';
import type { DataAPI, UserData } from 'dispo-api';
import Form from '../Form/Form';
import type { InputDescription } from '../Form/Form';

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

type UserFormProps = {
  usersRefresh: Function,
  dataAPI: DataAPI
};

const UserForm = (props: UserFormProps) => (
  <Form
    initialState={initialState}
    inputs={inputs}
    onSubmit={(formData) => {
      props.dataAPI.user
        .create(formData)
        .then((res) => console.log(res))
        .then(() => props.usersRefresh())
        .catch((err) => console.log(err));
    }}
    onSubmitLabel="CREER UN UTILISATEUR"
  />
);

export default UserForm;
