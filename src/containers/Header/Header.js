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
  <AppBar
    position="static"
    style={{ display: 'flex', flexFlow: 'row nowrap', padding: 10 }}
  >
    {props.isAuthenticated && (
      <IconButton
        style={{ height: 'inherit' }}
        color="contrast"
        aria-label="menu"
        onClick={props.toggleMenu}
      >
        <MenuIcon />
      </IconButton>
    )}
    <Toolbar style={{ flex: 1, justifyContent: 'center' }}>
      <Typography type="title" color="inherit">
        {props.title}
      </Typography>
    </Toolbar>
  </AppBar>
);
