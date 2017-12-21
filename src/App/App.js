// @flow
import React from 'react';
import { HeaderContainer } from '../containers/Header/HeaderContainer';
import { RouterContainer } from '../containers/Router/RouterContainer';
import { ErrorContainer } from '../containers/Error/ErrorContainer';
import { MenuContainer } from '../containers/Menu/MenuContainer';
import './App.css';

type AppProps = {};

export const App = (props: AppProps) => (
  <div
    style={{
      display: 'flex',
      flexFlow: 'column wrap',
      textAlign: 'center',
      minHeight: '98vh'
    }}
  >
    <HeaderContainer />
    <MenuContainer />
    <RouterContainer />
    <ErrorContainer />
  </div>
);
