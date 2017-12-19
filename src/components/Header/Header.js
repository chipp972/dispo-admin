// @flow
import React from 'react';
import { AppBar, Typography, Toolbar } from 'material-ui';
import type { ElementType } from 'react';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

export type ActionButton = {
  label: string,
  Icon?: ElementType,
  onClick: (ev: any) => any
};

type HeaderProps = {
  title: string,
  isAuthenticated: boolean
};

export const Header = (props: HeaderProps) => (
  <AppBar position="static" style={{ padding: 10 }}>
    <Toolbar>
      {props.isAuthenticated && (
        <IconButton color="contrast" aria-label="menu">
            <MenuIcon />
        </IconButton>
      )}
      <Typography type="title" color="inherit">
        {props.title}
      </Typography>
    </Toolbar>
  </AppBar>
);
