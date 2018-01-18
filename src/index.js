// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { App } from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { store, initApp } from './store/store';
import { history } from './store/history';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
initApp(store);
