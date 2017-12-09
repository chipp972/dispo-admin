// @flow
import { connect } from 'react-redux';
import { Header } from '../components/Header/Header';

const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: state.authentication.isAuthenticated,
  title: "Panneau d'administration"
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(
  Header
);
