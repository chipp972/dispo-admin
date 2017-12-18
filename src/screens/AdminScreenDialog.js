// @flow
import React from 'react';
import { UserDialog } from '../components/User/UserDialog';
import { CompanyDialog } from '../components/Company/CompanyDialog';
import { CompanyTypeDialog } from '../components/CompanyType/CompanyTypeDialog';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { compose, nth, prop } from 'ramda';

const getTabId = (index: number, tabs: any[]): string =>
  compose(prop('id'), nth(index))(tabs);

type AdminScreenDialogProps = {
  isMobileViewport: boolean,
  isUserDialogOpen: boolean,
  isCompanyDialogOpen: boolean,
  isCompanyTypeDialogOpen: boolean,
  isModification: boolean,
  dialogContent: any,
  tabs: any[],
  currentTabIndex: number,
  openDialog: (
    dialogId: string,
    isModification: boolean,
    initialState?: any
  ) => any,
  closeDialog: () => any
};

export const AdminScreenDialog = (props: AdminScreenDialogProps) => (
  <div>
    <UserDialog
      dialogContent={props.dialogContent}
      isMobileViewport={props.isMobileViewport}
      isDialogOpen={props.isUserDialogOpen}
      handleError={(err: Error) => console.log(err)}
      closeDialog={props.closeDialog}
    />
    <CompanyDialog
      dialogContent={props.dialogContent}
      isMobileViewport={props.isMobileViewport}
      isDialogOpen={props.isCompanyDialogOpen}
      handleError={(err: Error) => console.log(err)}
      closeDialog={props.closeDialog}
    />
    <CompanyTypeDialog
      dialogContent={props.dialogContent}
      isMobileViewport={props.isMobileViewport}
      isDialogOpen={props.isCompanyTypeDialogOpen}
      handleError={(err: Error) => console.log(err)}
      closeDialog={props.closeDialog}
    />
    <Button
      fab
      style={{
        position: 'fixed',
        bottom: props.isMobileViewport ? 90 : 20,
        right: 30
      }}
      color="primary"
      aria-label="add"
      onClick={() =>
        props.openDialog(getTabId(props.currentTabIndex, props.tabs), false)
      }
    >
      <AddIcon />
    </Button>
  </div>
);
