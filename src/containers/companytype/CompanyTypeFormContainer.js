// @flow
import { connect } from 'react-redux';
import { CompanyTypeForm } from '../../components/CompanyType/CompanyTypeForm';
import { crud } from '../../store/apidata/api.action';

const mapStateToProps = (state, ownProps) => ({
  isModification: false // FIXME: take from uistate
  // initialState: state.uistate.currentSelection,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createCompanyType: formData => dispatch(crud.companyType.create(formData)),
  updateCompanyType: formData => dispatch(crud.companyType.edit(formData))
});

export const ConnectedCompanyTypeForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyTypeForm);
