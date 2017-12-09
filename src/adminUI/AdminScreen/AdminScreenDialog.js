// @flow
import React from 'react';
import { UserDialog } from '../../dataAPI/User/UserDialog';
import { CompanyDialog } from '../../dataAPI/Company/CompanyDialog';
import { CompanyTypeDialog } from '../../dataAPI/CompanyType/CompanyTypeDialog';
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
  isNew: boolean,
  dialogContent: any,
  tabs: any[],
  currentTabIndex: number,
  openDialog: (dialogId: string, isNew: boolean, initialState?: any) => any,
  closeDialog: () => any
};

export const AdminScreenDialog = (props: AdminScreenDialogProps) => (
  <div>
    <UserDialog
      isNew={props.isNew}
      dialogContent={props.dialogContent}
      isMobileViewport={props.isMobileViewport}
      isDialogOpen={props.isUserDialogOpen}
      handleError={(err: Error) => console.log(err)}
      closeDialog={props.closeDialog}
    />
    <CompanyDialog
      isNew={props.isNew}
      dialogContent={props.dialogContent}
      isMobileViewport={props.isMobileViewport}
      isDialogOpen={props.isCompanyDialogOpen}
      handleError={(err: Error) => console.log(err)}
      closeDialog={props.closeDialog}
    />
    <CompanyTypeDialog
      isNew={props.isNew}
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
        props.openDialog(getTabId(props.currentTabIndex, props.tabs), true)
      }
    >
      <AddIcon />
    </Button>
  </div>
);
