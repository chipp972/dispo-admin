// @flow
import { connect } from 'react-redux';
import { Router } from '../components/Router/Router';

const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: state.authentication.isAuthenticated
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export const RouterContainer = connect(mapStateToProps, mapDispatchToProps)(
  Router
);
