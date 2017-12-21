// @flow
import { connect } from 'react-redux';
import { CompanyTypeForm } from './CompanyTypeForm';
import { crud } from '../../../store/apidata/api.action';
import { closeDialog } from '../../../store/adminui/adminui.action';
import { DIALOG_ID, TAB_ID } from '../../../store/adminui/adminui.constant';

const mapStateToProps = (state, ownProps) => ({
  initialState: state.adminui.dialogContent,
  isUpdate: state.adminui.currentOpenDialog === DIALOG_ID.update,
  isCompanyTypeDialogOpen:
    (state.adminui.currentOpenDialog === DIALOG_ID.create ||
      state.adminui.currentOpenDialog === DIALOG_ID.update) &&
    state.adminui.currentTabId === TAB_ID.companyType
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createCompanyType: formData => dispatch(crud.companyType.create(formData)),
  updateCompanyType: formData => dispatch(crud.companyType.edit(formData)),
  closeDialog: () => dispatch(closeDialog())
});

export const CompanyTypeFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyTypeForm);
