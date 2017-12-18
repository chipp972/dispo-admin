// @flow
import { connect } from 'react-redux';
import { CompanyList } from '../../components/Company/CompanyList';

const mapStateToProps = (state, ownProps) => ({
  company: state.apidata.company
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export const CompanyListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyList);

