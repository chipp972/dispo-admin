// @flow
import React from 'react';
import { FabButton } from '../../components/Button/FabButton';
import { UserDialogContainer } from '../../containers/User/UserDialog/UserDialogContainer';
import { UserDialogConfirmRemoveContainer } from '../../containers/User/UserDialog/UserDialogConfirmRemoveContainer';
import { CompanyDialogContainer } from '../../containers/Company/CompanyDialog/CompanyDialogContainer';
import { CompanyDialogConfirmRemoveContainer } from '../../containers/Company/CompanyDialog/CompanyDialogConfirmRemoveContainer';
import { CompanyTypeDialogContainer } from '../../containers/CompanyType/CompanyTypeDialog/CompanyTypeDialogContainer';
import { CompanyTypeDialogConfirmRemoveContainer } from '../../containers/CompanyType/CompanyTypeDialog/CompanyTypeDialogConfirmRemoveContainer';

type AdminScreenDialogProps = {
  openDialog: () => any,
  isMobileViewport: boolean
};

export const AdminScreenDialog = (props: AdminScreenDialogProps) => (
  <div>
    <FabButton
      handleAction={props.openDialog}
      isMobileViewport={props.isMobileViewport}
    />
    <UserDialogContainer />
    <CompanyDialogContainer />
    <CompanyTypeDialogContainer />
    <CompanyTypeDialogConfirmRemoveContainer />
    <CompanyDialogConfirmRemoveContainer />
    <UserDialogConfirmRemoveContainer />
  </div>
);
