// @flow
import React from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Router } from '../Router/Router';

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
    <Header isAuthenticated={false} title="Panneau d'administration" />
    <Router />
  </div>
);
