// @flow
import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';

type ConfirmProps = {
  title: string,
  contentText: string,
  isDialogOpen: boolean,
  confirmAction: () => any,
  closeDialog: () => any
};

export const Confirm = (props: ConfirmProps) => (
  <Dialog
    open={props.isDialogOpen}
    onClose={props.closeDialog}
    aria-labelledby="confirm-dialog-title"
    aria-describedby="confirm-dialog-description"
  >
    <DialogTitle id="confirm-dialog-title">{props.title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="confirm-dialog-description">
        {props.contentText}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={props.closeDialog} color="primary">
        Annuler
      </Button>
      <Button
        onClick={() => {
          props.confirmAction();
          props.closeDialog();
        }}
        color="primary"
        autoFocus
      >
        OK
      </Button>
    </DialogActions>
  </Dialog>
);
