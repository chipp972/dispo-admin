// @flow
import React from 'react';
import MUIDialog from 'material-ui/Dialog';
import { DialogHeader } from './DialogHeader';
import Slide from 'material-ui/transitions/Slide';
import type { ElementType } from 'react';

const Transition = (props) => <Slide direction="up" {...props} />;

type DialogProps = {
  isMobileViewport: boolean,
  title: string,
  Content: ElementType,
  contentProps: any,
  isDialogOpen: boolean,
  handleError: (err: Error) => any,
  closeDialog: () => any
};

export const Dialog = ({
  isMobileViewport,
  title,
  Content,
  contentProps,
  isDialogOpen,
  handleError,
  closeDialog
}: DialogProps) => (
  <MUIDialog
    fullScreen
    open={isDialogOpen}
    onRequestClose={closeDialog}
    transition={Transition}
  >
    <DialogHeader
      isMobileViewport={isMobileViewport}
      title={title}
      handleError={handleError}
      closeDialog={closeDialog}
    />
    <div style={{ padding: "80px 0 0 0" }}>
      <Content {...contentProps} />
    </div>
  </MUIDialog>
);
