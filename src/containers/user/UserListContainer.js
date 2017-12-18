// @flow
import { connect } from 'react-redux';
import { UserList } from '../../components/User/UserList';

const mapStateToProps = (state, ownProps) => ({
  user: state.apidata.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export const UserListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
