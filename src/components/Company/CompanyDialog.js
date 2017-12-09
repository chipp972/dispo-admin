// @flow
import React from 'react';
import { Dialog } from '../../components/Dialog/Dialog';
import { CompanyForm } from './CompanyForm';
import type { Company } from 'dispo-api';

type CompanyDialogProps = {
  isMobileViewport: boolean,
  isDialogOpen: boolean,
  closeDialog: () => any,
  handleError: (err: Error) => any,
  company?: Company
};

export const CompanyDialog = (props: CompanyDialogProps) => (
  <Dialog
    isMobileViewport={props.isMobileViewport}
    isDialogOpen={props.isDialogOpen}
    closeDialog={props.closeDialog}
    title="ENTREPRISE"
    mainActionLabel="CREER"
    handleError={props.handleError}
    Content={CompanyForm}
    contentProps={{ initialState: props.company }}
  />
);
