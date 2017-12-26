// @flow
import { connect } from 'react-redux';
import { Toast } from './Toast';
import { hideError } from '../../store/notification/notification.action';

const mapStateToProps = (state, ownProps) => ({
  canShow: state.notification.errorList.length > 0,
  messageList: state.notification.errorList,
  messageColor: 'red'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideMessage: () => dispatch(hideError())
});

export const ErrorContainer = connect(mapStateToProps, mapDispatchToProps)(
  Toast
);
