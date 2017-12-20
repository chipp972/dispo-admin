// @flow
import React from 'react';
import { AppBar, Typography, Toolbar } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

type HeaderProps = {
  title: string,
  isAuthenticated: boolean,
  toggleMenu: () => any
};

export const Header = (props: HeaderProps) => (
  <AppBar position="static" style={{ padding: 10 }}>
    <Toolbar>
      {props.isAuthenticated && (
        <IconButton color="contrast" aria-label="menu" onClick={props.toggleMenu}>
          <MenuIcon />
        </IconButton>
      )}
      <Typography type="title" color="inherit">
        {props.title}
      </Typography>
    </Toolbar>
  </AppBar>
);
