// @flow
import { connect } from 'react-redux';
import { UserForm } from './UserForm';
import { crud } from '../../../store/apidata/api.action';
import { closeDialog } from '../../../store/adminui/adminui.action';
import { DIALOG_ID, TAB_ID } from '../../../store/adminui/adminui.constant';

const mapStateToProps = (state, ownProps) => ({
  initialState: state.adminui.dialogContent,
  isUpdate: state.adminui.currentOpenDialog === DIALOG_ID.update,
  isDialogOpen:
    (state.adminui.currentOpenDialog === DIALOG_ID.create ||
      state.adminui.currentOpenDialog === DIALOG_ID.update) &&
    state.adminui.currentTabId === TAB_ID.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createUser: formData => dispatch(crud.user.create(formData)),
  updateUser: formData => dispatch(crud.user.edit(formData)),
  closeDialog: () => dispatch(closeDialog())
});

export const UserFormContainer = connect(mapStateToProps, mapDispatchToProps)(
  UserForm
);
