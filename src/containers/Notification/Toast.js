// @flow
import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

type ToastProps = {
  canShow: boolean,
  messageList: string[],
  messageColor: string,
  hideMessage: () => any
};

export const Toast = (props: ToastProps) => (
  <Snackbar
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    open={props.canShow}
    autoHideDuration={2000}
    onRequestClose={props.hideMessage}
    SnackbarContentProps={{ 'aria-describedby': 'message-id' }}
    message={
      <span id="message-id" style={{ color: props.messageColor }}>
        {props.messageList.length > 0 && props.messageList[0]}
      </span>
    }
    action={[
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={props.hideMessage}
      >
        <CloseIcon />
      </IconButton>
    ]}
  />
);
