// @flow
import React from 'react';
import { Form } from '../../components/Form/Form';
import type { CompanyType, CompanyTypeData } from 'dispo-api';

type CompanyTypeFormProps = {
  initialState?: CompanyType,
  isModification: boolean,
  isCompanyTypeDialogOpen: boolean,
  createCompanyType: (formData: CompanyTypeData) => any,
  updateCompanyType: (formData: CompanyTypeData) => any,
  closeDialog: () => any
};

const initialState: CompanyTypeData = { name: '' };

export const CompanyTypeForm = (props: CompanyTypeFormProps) => (
  <Form
    initialState={
      props.isModification && props.initialState
        ? props.initialState
        : initialState
    }
    inputs={[{ id: 'name', label: "Type d'entreprise", type: 'text' }]}
    onSubmit={(formData: CompanyTypeData) => {
      props.isModification
        ? props.updateCompanyType(formData)
        : props.createCompanyType(formData);
      if (props.isCompanyTypeDialogOpen) props.closeDialog();
    }}
    onSubmitLabel={`${
      props.isModification ? 'MODIFIER' : 'CREER'
    } UN TYPE D'ENTREPRISE`}
  />
);
