// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';

type MenuProps = {
  isMenuOpen: boolean,
  onClose: () => any
};

export const Menu = (props: MenuProps) => (
  <Drawer open={props.isMenuOpen} onClose={props.onClose}>
    <List>
      <Link to="/logout">Deconnexion</Link>
      <Divider />
    </List>
  </Drawer>
);
