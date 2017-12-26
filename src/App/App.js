// @flow
import React from 'react';
import { HeaderContainer } from '../containers/Header/HeaderContainer';
import { RouterContainer } from '../containers/Router/RouterContainer';
import { MenuContainer } from '../containers/Menu/MenuContainer';
import { ErrorContainer } from '../containers/Notification/ErrorContainer';
import { InfoContainer } from '../containers/Notification/InfoContainer';
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
    <InfoContainer />
  </div>
);
