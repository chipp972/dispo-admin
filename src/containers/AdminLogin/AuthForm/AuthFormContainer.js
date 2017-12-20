// @flow
import { connect } from 'react-redux';
import { authenticate } from '../../../store/authentication/authentication.action';
import { AuthForm } from './AuthForm';

const mapStateToProps = (state, ownProps) => ({
  email: state.authentication.email
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  authenticate: (email, code) => dispatch(authenticate(email, code))
});

export const AuthFormContainer = connect(mapStateToProps, mapDispatchToProps)(
  AuthForm
);
