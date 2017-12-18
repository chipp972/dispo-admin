// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import Logger from 'redux-logger';
import { dispoAdmin } from './rootReducer';
import { retrieveToken } from './authentication/authentication.action';
import { handleViewportChange } from './adminui/adminui.action';
import { crud } from './apidata/api.action';
import type { Store } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  dispoAdmin,
  { authentication: { email: '', code: '' } },
  composeEnhancers(applyMiddleware(ReduxThunk, Logger))
);

/**
 * fetch API data if authenticated
 * @param {Store} appStore
 * @return {boolean}
 */
const initAPIData = (appStore: Store) => {
  const { authentication } = appStore.getState();
  const { isAuthenticated } = authentication;
  if (!isAuthenticated) return false;

  // get all data from the api
  appStore.dispatch(crud.company.getAll());
  appStore.dispatch(crud.user.getAll());
  appStore.dispatch(crud.companyType.getAll());
  return true;
};

/**
 * Init the app :
 *   - try to retrieve authentication token
 *   - handle viewport changes
 *   - init store data when authenticated
 * @param {Store} appStore
 */
export const initApp = (appStore: Store) => {
  appStore.dispatch(retrieveToken());
  window.addEventListener('resize', () =>
    appStore.dispatch(handleViewportChange(window.innerWidth))
  );
  initAPIData(appStore);
  // TODO: subscribe to websocket events
  const unsubscribe = appStore.subscribe(() => {
    if (initAPIData(appStore)) unsubscribe();
  });
};
