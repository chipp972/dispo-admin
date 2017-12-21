// @flow
import { connect } from 'react-redux';
import { LoginScreen } from './LoginScreen';

const mapStateToProps = (state, ownProps) => ({
  isCodeReceived: state.authentication.isCodeReceived
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export const LoginScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
