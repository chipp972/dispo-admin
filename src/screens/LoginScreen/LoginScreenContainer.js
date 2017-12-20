// @flow
import { connect } from 'react-redux';
import { LoginScreen } from './LoginScreen';

const mapStateToProps = (state, ownProps) => ({
  email: state.authentication.email
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export const LoginScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
