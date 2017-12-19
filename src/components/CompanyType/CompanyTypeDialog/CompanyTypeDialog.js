// @flow
import React from 'react';
import { Dialog } from '../../Dialog/Dialog';
import { CompanyTypeFormContainer } from '../CompanyTypeForm/CompanyTypeFormContainer';
import type { CompanyType } from 'dispo-api';

type CompanyTypeDialogProps = {
  isMobileViewport: boolean,
  isDialogOpen: boolean,
  closeDialog: () => any,
  companyType?: CompanyType
};

export const CompanyTypeDialog = (props: CompanyTypeDialogProps) => (
  <Dialog
    isMobileViewport={props.isMobileViewport}
    isDialogOpen={props.isDialogOpen}
    closeDialog={props.closeDialog}
    title="TYPE D'ENTREPRISE"
    Content={CompanyTypeFormContainer}
  />
);
