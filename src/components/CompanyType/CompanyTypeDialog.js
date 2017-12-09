// @flow
import React from 'react';
import { Dialog } from '../../components/Dialog/Dialog';
import { CompanyTypeForm } from './CompanyTypeForm';
import type { CompanyType } from 'dispo-api';

type CompanyTypeDialogProps = {
  isMobileViewport: boolean,
  isDialogOpen: boolean,
  closeDialog: () => any,
  handleError: (err: Error) => any,
  companyType?: CompanyType
};

export const CompanyTypeDialog = (props: CompanyTypeDialogProps) => (
  <Dialog
    isMobileViewport={props.isMobileViewport}
    isDialogOpen={props.isDialogOpen}
    closeDialog={props.closeDialog}
    title="TYPE D'ENTREPRISE"
    mainActionLabel="CREER"
    handleError={props.handleError}
    Content={CompanyTypeForm}
    contentProps={{ initialState: props.companyType }}
  />
);
