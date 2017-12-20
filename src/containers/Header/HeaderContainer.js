// @flow
import { connect } from 'react-redux';
import { Header } from './Header';
import { toggleMenu } from '../../store/adminui/adminui.action';

const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: state.authentication.isAuthenticated,
  title: "Panneau d'administration"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleMenu: () => dispatch(toggleMenu())
});

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(
  Header
);
