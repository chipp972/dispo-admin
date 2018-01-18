// @flow
import { connect } from 'react-redux';
import { Menu } from './Menu';
import { toggleMenu } from '../../store/adminui/adminui.action';
import { logout } from '../../store/authentication/authentication.action';

const mapStateToProps = (state, ownProps) => ({
  isAdminAuthenticated: state.authentication.isAdminAuthenticated,
  isUserAuthenticated: state.authentication.isUserAuthenticated,
  isMenuOpen: state.adminui.isMenuOpen
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleMenu: () => dispatch(toggleMenu()),
  logout: () => dispatch(logout())
});

export const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);
