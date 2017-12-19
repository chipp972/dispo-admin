// @flow
import { connect } from 'react-redux';
import {
  changeTab,
  openDialog,
  closeDialog
} from '../store/adminui/adminui.action';
import { AdminScreen } from '../screens/AdminScreen';
import type { DialogId } from '../store/adminui/adminui.js.flow';

const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: state.authentication.isAuthenticated,
  isMobileViewport: state.adminui.isMobileViewport,
  isUserDialogOpen: state.adminui.isUserDialogOpen,
  isCompanyDialogOpen: state.adminui.isCompanyDialogOpen,
  isCompanyTypeDialogOpen: state.adminui.isCompanyTypeDialogOpen,
  currentTabIndex: state.adminui.currentTabIndex,
  isModification: state.adminui.isModification,
  dialogContent: state.adminui.dialogContent
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeTab: (index, maxTab) => dispatch(changeTab(index, maxTab)),
  openDialog: (
    dialogId: DialogId,
    isModification: boolean,
    initialState
  ) => dispatch(openDialog(dialogId, isModification, initialState)),
  closeDialog: () => dispatch(closeDialog())
});

export const AdminScreenWithState = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminScreen);
