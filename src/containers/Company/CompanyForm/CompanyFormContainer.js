// @flow
import { connect } from 'react-redux';
import { CompanyForm } from './CompanyForm';
import { crud } from '../../../store/apidata/api.action';
import { closeDialog } from '../../../store/adminui/adminui.action';
import { DIALOG_ID, TAB_ID } from '../../../store/adminui/adminui.constant';

const mapStateToProps = (state, ownProps) => ({
  isUserAuthenticated: state.authentication.isUserAuthenticated,
  userId: state.authentication.tokenId,
  companyTypeList: state.apidata.companytype.list,
  userList: state.apidata.user.list,
  initialState: state.adminui.dialogContent,
  isUpdate: state.adminui.currentOpenDialog === DIALOG_ID.update,
  isDialogOpen:
    (state.adminui.currentOpenDialog === DIALOG_ID.create ||
      state.adminui.currentOpenDialog === DIALOG_ID.update) &&
    state.adminui.currentTabId === TAB_ID.company
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createCompany: formData => dispatch(crud.company.create(formData)),
  updateCompany: formData => dispatch(crud.company.edit(formData)),
  closeDialog: () => dispatch(closeDialog())
});

export const CompanyFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyForm);
