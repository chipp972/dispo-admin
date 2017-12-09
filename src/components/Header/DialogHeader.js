// @flow
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import { closeDialog } from '../../adminUI/adminui.action';

type DialogHeaderProps = {
  title: string,
  mainActionLabel: string,
  mainAction?: () => any,
  handleError: (err: Error) => any,
  closeDialog: () => any
};

export const DialogHeader = (props: DialogHeaderProps) => (
  <AppBar style={{ display: 'flex', padding: 10 }}>
    <Toolbar>
      <IconButton
        color="contrast"
        onClick={props.closeDialog}
        aria-label="Close"
      >
        <CloseIcon />
      </IconButton>
      <Typography type="title" color="inherit" style={{ flex: 1 }}>
        {props.title}
      </Typography>
      <Button
        color="contrast"
        onClick={async () => {
          try {
            props.mainAction && await props.mainAction();
            props.closeDialog();
          } catch (err) {
            props.handleError(err);
          }
        }}
        style={{ flex: 0 }}
      >
        {props.mainActionLabel}
      </Button>
    </Toolbar>
  </AppBar>
);
