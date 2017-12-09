// @flow
import { connect } from 'react-redux';
import {
  changeTab,
  openDialog,
  closeDialog
} from '../store/adminui/adminui.action';
import { AdminScreen } from '../components/AdminScreen/AdminScreen';

const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: state.authentication.isAuthenticated,
  isMobileViewport: state.adminui.isMobileViewport,
  isUserDialogOpen: state.adminui.isUserDialogOpen,
  isCompanyDialogOpen: state.adminui.isCompanyDialogOpen,
  isCompanyTypeDialogOpen: state.adminui.isCompanyTypeDialogOpen,
  currentTabIndex: state.adminui.currentTabIndex,
  isNew: state.adminui.isNew,
  dialogContent: state.adminui.dialogContent
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeTab: (index, maxTab) => dispatch(changeTab(index, maxTab)),
  openDialog: (
    dialogId: 'user' | 'company' | 'companyType',
    isNew: boolean,
    initialState
  ) => dispatch(openDialog(dialogId, isNew, initialState)),
  closeDialog: () => dispatch(closeDialog())
});

export const AdminScreenWithState = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminScreen);
