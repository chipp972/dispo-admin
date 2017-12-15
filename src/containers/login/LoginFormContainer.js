// @flow
import { connect } from 'react-redux';
import { sendCode } from '../../store/authentication/authentication.action';
import { LoginForm } from '../../components/AdminLogin/LoginForm';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendCode: email => dispatch(sendCode(email))
});

export const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(
  LoginForm
);
