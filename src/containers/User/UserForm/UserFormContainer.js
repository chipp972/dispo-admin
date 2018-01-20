// @flow
import { connect } from 'react-redux';
import { UserForm } from './UserForm';
import { crud } from '../../../store/apidata/api.action';
import { closeDialog } from '../../../store/adminui/adminui.action';
import { userRegister } from '../../../store/authentication/authentication.action';
import { DIALOG_ID, TAB_ID } from '../../../store/adminui/adminui.constant';

const formatDate = (datestring: string) => {
  if (!datestring) return '';
  const re = /^(\d{4}-\d{2}-\d{2})/.exec(datestring);
  return re.length > 1 ? re[1] : '';
};

const mapStateToProps = (state, ownProps) => ({
  initialState: state.adminui.dialogContent && {
    ...state.adminui.dialogContent,
    birthDate: formatDate(state.adminui.dialogContent.birthDate)
  },
  isUserAuthenticated: state.authentication.isUserAuthenticated,
  isAdminAuthenticated: state.authentication.isAdminAuthenticated,
  isUpdate: state.adminui.currentOpenDialog === DIALOG_ID.update,
  isDialogOpen:
    (state.adminui.currentOpenDialog === DIALOG_ID.create ||
      state.adminui.currentOpenDialog === DIALOG_ID.update) &&
    state.adminui.currentTabId === TAB_ID.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createUser: formData => dispatch(crud.user.create(formData)),
  updateUser: formData => dispatch(crud.user.edit(formData)),
  registerUser: formData => dispatch(userRegister(formData)),
  closeDialog: () => dispatch(closeDialog())
});

export const UserFormContainer = connect(mapStateToProps, mapDispatchToProps)(
  UserForm
);
