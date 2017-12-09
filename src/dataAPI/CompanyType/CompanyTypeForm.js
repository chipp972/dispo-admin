// @flow
import React from 'react';
import { Form } from '../../components/Form/Form';
import type { CompanyType, CompanyTypeData, DataAPI } from 'dispo-api';

type CompanyTypeFormProps = {
  dataAPI: DataAPI,
  companyTypesRefresh: Function
};

const initialState: CompanyTypeData = { name: '' };

export const CompanyTypeForm = (props: CompanyTypeFormProps) => (
  <Form
    initialState={initialState}
    inputs={[{ id: 'name', label: "Type d'entreprise", type: 'text' }]}
    onSubmit={(formData) => {
      props.dataAPI.companyType
        .create(formData)
        .then((res: CompanyType) => console.log(res))
        .then(() => props.companyTypesRefresh())
        .catch((err) => console.log(err));
    }}
    onSubmitLabel="CREER UN TYPE D'ENTREPRISE"
  />
);
