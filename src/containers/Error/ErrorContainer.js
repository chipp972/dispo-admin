// @flow
import { connect } from 'react-redux';
import { SnackbarError } from './SnackbarError';
import { hideError } from '../../store/apidata/api.action';

const mapStateToProps = (state, ownProps) => ({
  errorList: state.apidata.errorList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideError: () => dispatch(hideError())
});

export const ErrorContainer = connect(mapStateToProps, mapDispatchToProps)(
  SnackbarError
);
