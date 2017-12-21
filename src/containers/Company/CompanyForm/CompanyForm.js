// @flow
import React from 'react';
import { Form } from '../../../components/Form/Form';
import type { InputDescription } from '../../../components/Form/Form';
import type { Company, CompanyData, CompanyType, User } from 'dispo-api';

type CompanyFormProps = {
  companyTypeList: CompanyType[],
  userList: User[],
  isUpdate: boolean,
  isDialogOpen: boolean,
  createCompany: CompanyData => any,
  updateCompany: CompanyData => any,
  closeDialog: () => any,
  initialState?: Company
};

export const initialState: CompanyData = {
  owner: '',
  name: 'company01',
  type: '',
  siret: '1234561o901234',
  imageUrl:
    'https://assets-cdn.github.com/images/modules/open_graph/github-mark.png',
  address: '6 rue du havre 75009 Paris',
  phoneNumber: '0698310966'
};

const inputs: InputDescription[] = [
  {
    id: 'owner',
    label: 'Gerant',
    type: 'select',
    isValid: value => value.length > 0,
    helperText: 'Choisir un gerant'
  },
  {
    id: 'name',
    label: "Nom de l'entreprise",
    type: 'text',
    isValid: value => value.length > 0,
    helperText: 'Un nom est obligatoire'
  },
  {
    id: 'type',
    label: 'Type',
    type: 'select',
    isValid: value => value.length > 0,
    helperText: "Choisir un type d'entreprise"
  },
  {
    id: 'siret',
    label: 'Siret',
    type: 'text',
    isValid: value => /[a-zA-Z0-9]{14}/.test(value),
    helperText: 'Contient 14 lettres et chiffres'
  },
  { id: 'imageUrl', label: 'image', type: 'text' },
  {
    id: 'address',
    label: 'Adresse',
    type: 'text',
    isValid: value => value.length > 0,
    helperText: 'Une adresse est obligatoire'
  },
  {
    id: 'phoneNumber',
    label: 'Numero de telephone',
    type: 'text',
    isValid: value => /[0-9]{10}/.test(value),
    helperText: 'Contient exactement 10 chiffres'
  }
];

export const CompanyForm = (props: CompanyFormProps) => (
  <Form
    initialState={props.initialState || initialState}
    inputs={inputs}
    selectOptions={{
      owner: props.userList.map(user => ({ _id: user._id, label: user.email })),
      type: props.companyTypeList.map(type => ({
        _id: type._id,
        label: type.name
      }))
    }}
    onSubmit={(formData: CompanyData) => {
      props.isUpdate
        ? props.updateCompany(formData)
        : props.createCompany(formData);
      if (props.isDialogOpen) props.closeDialog();
    }}
    onSubmitLabel={`${props.isUpdate ? 'MODIFIER' : 'CREER'} UNE ENTREPRISE`}
  />
);
