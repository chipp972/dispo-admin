// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';

type MenuProps = {
  isMenuOpen: boolean,
  toggleMenu: () => any
};

export const Menu = (props: MenuProps) => {
  return props.isAuthenticated ? (
    <Drawer
      open={props.isMenuOpen}
      docked={false}
      onRequestClose={() => props.toggleMenu()}
    >
      <List>
        <Button component={props => <Link to="/logout" />}>Deconnexion</Button>
        <Divider />
      </List>
    </Drawer>
  ) : (
    <div />
  );
};
