// @flow
import { connect } from 'react-redux';
import { Router } from './Router';

const mapStateToProps = (state, ownProps) => ({
  isAdminAuthenticated: state.authentication.isAdminAuthenticated,
  isUserAuthenticated: state.authentication.isUserAuthenticated
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export const RouterContainer = connect(mapStateToProps, mapDispatchToProps)(
  Router
);
