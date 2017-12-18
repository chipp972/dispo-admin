// @flow
import React from 'react';
import { Dialog } from '../../components/Dialog/Dialog';
import { ConnectedUserForm } from '../../containers/user/UserFormContainer';
import type { User } from 'dispo-api';

type UserDialogProps = {
  isMobileViewport: boolean,
  isDialogOpen: boolean,
  closeDialog: () => any,
  handleError: (err: Error) => any,
  user?: User
};

export const UserDialog = (props: UserDialogProps) => (
  <Dialog
    isMobileViewport={props.isMobileViewport}
    isDialogOpen={props.isDialogOpen}
    closeDialog={props.closeDialog}
    title="UTILISATEUR"
    mainActionLabel="CREER"
    handleError={props.handleError}
    Content={ConnectedUserForm}
    contentProps={{ initialState: props.user }}
  />
);
