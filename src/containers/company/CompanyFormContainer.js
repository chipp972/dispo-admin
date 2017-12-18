// @flow
import { connect } from 'react-redux';
import { CompanyForm } from '../../components/Company/CompanyForm';
import { crud } from '../../store/apidata/api.action';
import { closeDialog } from '../../store/adminui/adminui.action';

const mapStateToProps = (state, ownProps) => ({
  companyTypeList: state.apidata.companytype.list,
  userList: state.apidata.user.list,
  isModification: state.adminui.isModification,
  isCompanyDialogOpen: state.adminui.isCompanyDialogOpen
  // initialState: state.adminui.currentCompanyType,
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

