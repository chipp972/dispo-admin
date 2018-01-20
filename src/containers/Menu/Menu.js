// @flow
import React from 'react';
import { Divider, Drawer, Button } from 'material-ui';

type MenuProps = {
  isAdminAuthenticated: boolean,
  isUserAuthenticated: boolean,
  isMenuOpen: boolean,
  toggleMenu: () => any,
  logout: () => any
};

export const Menu = (props: MenuProps) => {
  if (props.isAdminAuthenticated) {
    return (
      <Drawer open={props.isMenuOpen} onRequestClose={() => props.toggleMenu()}>
        <Divider />
        <Button onClick={() => props.logout()}>Deconnexion</Button>
      </Drawer>
    );
  } else if (props.isUserAuthenticated) {
    return (
      <Drawer open={props.isMenuOpen} onRequestClose={() => props.toggleMenu()}>
        <Divider />
        <Button onClick={() => props.logout()}>Deconnexion</Button>
      </Drawer>
    );
  } else {
    return <div />;
  }
};
