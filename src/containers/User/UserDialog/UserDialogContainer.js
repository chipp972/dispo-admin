// @flow
import { connect } from 'react-redux';
import { Dialog } from '../../../components/Dialog/Dialog';
import { closeDialog } from '../../../store/adminui/adminui.action';
import { UserFormContainer } from '../UserForm/UserFormContainer';
import { DIALOG_ID, TAB_ID } from '../../../store/adminui/adminui.constant';

const mapStateToProps = (state, ownProps) => ({
  isMobileViewport: state.adminui.isMobileViewport,
  title: 'UTILISATEUR',
  Content: UserFormContainer,
  isDialogOpen:
    (state.adminui.currentOpenDialog === DIALOG_ID.create ||
      state.adminui.currentOpenDialog === DIALOG_ID.update) &&
    state.adminui.currentTabId === TAB_ID.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeDialog: () => dispatch(closeDialog())
});

export const UserDialogContainer = connect(mapStateToProps, mapDispatchToProps)(
  Dialog
);
