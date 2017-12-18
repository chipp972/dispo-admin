// @flow
import { connect } from 'react-redux';
import { CompanyTypeList } from '../../components/CompanyType/CompanyTypeList';

const mapStateToProps = (state, ownProps) => ({
  companytype: state.apidata.companytype
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export const CompanyTypeListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyTypeList);