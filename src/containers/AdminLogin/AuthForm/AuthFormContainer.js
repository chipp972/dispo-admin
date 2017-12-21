// @flow
import { connect } from 'react-redux';
import {
  authenticate,
  sendCode
} from '../../../store/authentication/authentication.action';
import { AuthForm } from './AuthForm';

const mapStateToProps = (state, ownProps) => ({
  email: state.authentication.email,
  canSendCode: state.authentication.canSendCode
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  authenticate: (email, code) => dispatch(authenticate(email, code)),
  sendCode: (email: string) => dispatch(sendCode(email))
});

export const AuthFormContainer = connect(mapStateToProps, mapDispatchToProps)(
  AuthForm
);
