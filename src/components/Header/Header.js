// @flow
import React from 'react';
import { AppBar, Typography, Toolbar, Button } from 'material-ui';
import { Link } from 'react-router-dom';
import ExitToApp from 'material-ui-icons/ExitToApp';
import type { ElementType } from 'react';

export type ActionButton = {
  label: string,
  Icon?: ElementType,
  onClick: (ev: any) => any
}

type HeaderProps = {
  title: string,
  isAuthenticated: boolean
};

export const Header = (props: HeaderProps) => (
  <AppBar position="static" style={{ padding: 10 }}>
    <Toolbar>
      <Typography type="title" color="inherit">
        {props.title}
      </Typography>
      {props.isAuthenticated && (
        <Button color="contrast">
          <Link to="/logout">
            <ExitToApp />
          </Link>
        </Button>
      )}
    </Toolbar>
  </AppBar>
);
