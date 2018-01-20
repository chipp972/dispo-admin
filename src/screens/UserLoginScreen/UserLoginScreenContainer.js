// @flow
import { connect } from 'react-redux';
import { openRegisterDialog } from '../../store/adminui/adminui.action';
import { userLogin } from '../../store/authentication/authentication.action';
import { UserLoginScreen } from './UserLoginScreen';

const mapStateToProps = (state, ownProps) => ({
  isAuthenticationPending: state.authentication.isAuthenticationPending
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  userLogin: ({ email, password }) => dispatch(userLogin(email, password)),
  openDialog: () => dispatch(openRegisterDialog())
});

export const UserLoginScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginScreen);
