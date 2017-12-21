// @flow
import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

type SnackbarErrorProps = {
  errorList: string[],
  hideError: () => any
};

export const SnackbarError = (props: SnackbarErrorProps) => (
  <Snackbar
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    open={props.errorList.length > 0}
    autoHideDuration={2000}
    onRequestClose={props.hideError}
    SnackbarContentProps={{ 'aria-describedby': 'message-id' }}
    message={
      <span id="message-id">
        {props.errorList.length > 0 && props.errorList[0]}
      </span>
    }
    action={[
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={props.hideError}
      >
        <CloseIcon />
      </IconButton>
    ]}
  />
);
