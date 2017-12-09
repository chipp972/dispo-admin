// @flow
import React from 'react';
import { Dialog } from '../../components/Dialog/Dialog';
import { UserForm } from './UserForm';
import type { User } from 'dispo-api';

type UserDialogProps = {
  isNew: boolean,
  isMobileViewport: boolean,
  isDialogOpen: boolean,
  closeDialog: () => any,
  handleError: (err: Error) => any,
  user?: User
};

export const UserDialog = (props: UserDialogProps) => (
  <Dialog
    isNew={props.isNew}
    isMobileViewport={props.isMobileViewport}
    isDialogOpen={props.isDialogOpen}
    closeDialog={props.closeDialog}
    title="UTILISATEUR"
    mainActionLabel="CREER"
    handleError={props.handleError}
    Content={UserForm}
    contentProps={{ initialState: props.user }}
  />
);
