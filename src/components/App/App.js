// @flow
import React from 'react';
import { HeaderContainer } from '../../containers/HeaderContainer';
import { RouterContainer } from '../../containers/RouterContainer';
import {ErrorContainer} from '../../containers/ErrorContainer';
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
    <RouterContainer />
    <ErrorContainer />
  </div>
);
