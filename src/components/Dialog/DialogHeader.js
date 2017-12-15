// @flow
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';

type DialogHeaderProps = {
  isMobileViewport: boolean,
  title: string,
  handleError: (err: Error) => any,
  closeDialog: () => any
};

export const DialogHeader = (props: DialogHeaderProps) => (
  <AppBar
    position="absolute"
    style={{
      display: 'flex',
      textAlign: 'center',
      padding: '10px 20px 10px 20px'
    }}
  >
    <Toolbar disableGutters={props.isMobileViewport}>
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
    </Toolbar>
  </AppBar>
);
