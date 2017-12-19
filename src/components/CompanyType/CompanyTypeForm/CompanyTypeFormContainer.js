// @flow
import { connect } from 'react-redux';
import { CompanyTypeForm } from './CompanyTypeForm';
import { crud } from '../../../store/apidata/api.action';
import { closeDialog } from '../../../store/adminui/adminui.action';

const mapStateToProps = (state, ownProps) => ({
  isModification: state.adminui.isModification,
  isCompanyTypeDialogOpen: state.adminui.isCompanyTypeDialogOpen,
  initialState: state.adminui.dialogContent
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
