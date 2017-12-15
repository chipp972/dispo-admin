// @flow
import { connect } from 'react-redux';
import { LoginScreen } from '../../screens/LoginScreen';

const mapStateToProps = (state, ownProps) => ({
  email: state.authentication.email
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(
  LoginScreen
);
