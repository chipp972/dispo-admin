// @flow
import { connect } from 'react-redux';
import { Toast } from './Toast';
import { hideInfo } from '../../store/notification/notification.action';

const mapStateToProps = (state, ownProps) => ({
  canShow:
    state.notification.errorList.length === 0 &&
    state.notification.infoList.length > 0,
  messageList: state.notification.infoList,
  messageColor: 'white'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideMessage: () => dispatch(hideInfo())
});

export const InfoContainer = connect(mapStateToProps, mapDispatchToProps)(
  Toast
);
