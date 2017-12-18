// @flow
import { connect } from 'react-redux';
import { UserForm } from '../../components/User/UserForm';
import { crud } from '../../store/apidata/api.action';
import { closeDialog } from '../../store/adminui/adminui.action';

const mapStateToProps = (state, ownProps) => ({
  isModification: state.adminui.isModification,
  isUserDialogOpen: state.adminui.isUserDialogOpen
  // initialState: state.uistate.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createUser: formData => dispatch(crud.user.create(formData)),
  updateUser: formData => dispatch(crud.user.edit(formData)),
  closeDialog: () => dispatch(closeDialog())
});

export const ConnectedUserForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
