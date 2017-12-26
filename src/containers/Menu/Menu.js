// @flow
import React from 'react';
import { Divider, Drawer, Button } from 'material-ui';

type MenuProps = {
  isAuthenticated: boolean,
  isMenuOpen: boolean,
  toggleMenu: () => any,
  logout: () => any
};

export const Menu = (props: MenuProps) => {
  return props.isAuthenticated ? (
    <Drawer open={props.isMenuOpen} onRequestClose={() => props.toggleMenu()}>
      <Divider />
      <Button onClick={() => props.logout()}>Deconnexion</Button>
    </Drawer>
  ) : (
    <div />
  );
};
