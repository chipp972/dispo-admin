// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Drawer, Button } from 'material-ui';

type MenuProps = {
  isAuthenticated: boolean,
  isMenuOpen: boolean,
  toggleMenu: () => any
};

export const Menu = (props: MenuProps) => {
  return props.isAuthenticated ? (
    <Drawer open={props.isMenuOpen} onRequestClose={() => props.toggleMenu()}>
      <Divider />
      <Button component={Link} to="/logout">Deconnexion</Button>
    </Drawer>
  ) : (
    <div />
  );
};
