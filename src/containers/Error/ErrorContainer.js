// @flow
import { connect } from 'react-redux';
import { SnackbarError } from './SnackbarError';
import { hideError } from '../../store/error/error.action';

const mapStateToProps = (state, ownProps) => ({
  errorList: state.errorHandler.errorList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideError: () => dispatch(hideError())
});

export const ErrorContainer = connect(mapStateToProps, mapDispatchToProps)(
  SnackbarError
);
