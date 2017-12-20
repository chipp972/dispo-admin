// @flow
import React from 'react';
import AddIcon from 'material-ui-icons/Add';
import Button from 'material-ui/Button';

type FabButtonProps = {
  handleAction: () => any,
  isMobileViewport: boolean
};
export const FabButton = (props: FabButtonProps) => (
  <Button
    fab
    style={{
      position: 'fixed',
      bottom: props.isMobileViewport ? 90 : 20,
      right: 30
    }}
    color="primary"
    aria-label="add"
    onClick={() => props.handleAction()}
  >
    <AddIcon />
  </Button>
);
