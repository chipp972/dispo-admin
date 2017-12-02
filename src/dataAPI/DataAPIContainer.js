// @flow
import { connect } from 'react-redux';
import { AdminScreen } from './AdminScreen/AdminScreen';

const mapStateToProps = (state, ownProps) => ({
  token: state.authentication.token,
  isAuthenticated: state.authentication.isAuthenticated
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export const AdminScreenWithAPI = connect(mapStateToProps, mapDispatchToProps)(
  AdminScreen
);
