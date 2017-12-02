// @flow
import { connect } from 'react-redux';
import { sendCode, authenticate, retrieveToken } from './authentication.action';
import { LoginScreen } from './AdminLogin/LoginScreen';

const mapStateToProps = (state, ownProps) => ({
  email: state.authentication.email,
  code: state.authentication.code,
  error: state.authentication.error,
  tokenId: state.authentication.tokenId,
  token: state.authentication.token,
  expireAt: state.authentication.expireAt,
  isAuthenticated: state.authentication.isAuthenticated
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendCode: (email) => dispatch(sendCode(email)),
  authenticate: (email, code) => dispatch(authenticate(email, code)),
  retrieveToken: () => dispatch(retrieveToken())
});

export const LoginScreenWithAuth = connect(mapStateToProps, mapDispatchToProps)(
  LoginScreen
);
