// @flow
import React from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Router } from '../Router/Router';

type AppProps = {};

export const App = (props: AppProps) => (
  <div style={{ textAlign: 'center' }}>
    <Header isAuthenticated={false} />
    <Router />
  </div>
);
