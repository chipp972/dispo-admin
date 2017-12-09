// @flow
import { connect } from 'react-redux';
import { UserDialog } from './User/UserDialog';
import { CompanyTypeDialog } from './CompanyType/CompanyTypeDialog';
import { CompanyDialog } from './Company/CompanyDialog';
import { crud } from '../store/apidata/api.action';
import { UserList } from './User/UserList';
import { CompanyTypeList } from './CompanyType/CompanyTypeList';
import { CompanyList } from './Company/CompanyList';

const mapStateToProps = (state, ownProps) => ({
  token: state.authentication.token,
  company: state.apidata.company,
  user: state.apidata.user,
  companytype: state.apidata.companytype
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  userAction: {
    getAll: () => dispatch(crud.user.getAll())
  },
  companyAction: {
    getAll: () => dispatch(crud.company.getAll())
  },
  companytypeAction: {
    getAll: () => dispatch(crud.companyType.getAll())
  }
});

// export contained components
export const ConnectedUserList = connect(mapStateToProps, mapDispatchToProps)(
  UserList
);
export const ConnectedCompanyList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyList);
export const ConnectedCompanyTypeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyTypeList);

export const ConnectedUserDialog = connect(mapStateToProps, mapDispatchToProps)(
  UserDialog
);
export const ConnectedCompanyDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyDialog);
export const ConnectedCompanyTypeDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyTypeDialog);
