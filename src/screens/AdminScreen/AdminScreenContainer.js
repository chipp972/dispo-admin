// @flow
import { connect } from 'react-redux';
import {
  changeTab,
  openDialog,
  closeDialog
} from '../../store/adminui/adminui.action';
import { AdminScreen } from './AdminScreen';
import { DIALOG_ID } from '../../store/adminui/adminui.constant';

const mapStateToProps = (state, ownProps) => ({
  isMobileViewport: state.adminui.isMobileViewport,
  currentTabIndex: state.adminui.currentTabIndex
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeTab: (index: number, maxTab: number) =>
    dispatch(changeTab(index, maxTab)),
  openDialog: () => dispatch(openDialog({ dialogId: DIALOG_ID.create })),
  closeDialog: () => dispatch(closeDialog())
});

export const AdminScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminScreen);
