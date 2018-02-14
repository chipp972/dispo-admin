// @flow
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import Logger from 'redux-logger';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { history } from './history';
import { dispoAdmin } from './rootReducer';
import { retrieveToken } from './authentication/authentication.action';
import { handleViewportChange } from './adminui/adminui.action';
import { crud } from './apidata/api.action';
import { handleWebsocketEvents } from './wsdata/wsdata.action';
import env from '../env';
import type { Store } from 'redux';

const isProd: boolean = env.nodeEnv === 'production';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const middlewares = isProd
  ? compose(applyMiddleware(ReduxThunk, routerMiddleware(history)))
  : composeEnhancers(
      applyMiddleware(ReduxThunk, routerMiddleware(history), Logger)
    );

export const store = createStore(
  combineReducers({ ...dispoAdmin, router: routerReducer }),
  {},
  middlewares
);

/**
 * fetch API data if authenticated
 * @param {Store} appStore
 * @return {boolean}
 */
const initAPIData = (appStore: Store) => {
  const { authentication } = appStore.getState();
  const { isAdminAuthenticated, isUserAuthenticated} = authentication;
  if (!(isAdminAuthenticated || isUserAuthenticated)) return false;

  // get all data from the api
  appStore.dispatch(crud.company.getAll());
  appStore.dispatch(crud.user.getAll());
  appStore.dispatch(crud.companyType.getAll());
  appStore.dispatch(crud.companyPopularity.getAll());
  // register actions on websocket events
  handleWebsocketEvents(appStore);
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
  if (env.isAuthenticationActivated) {
    appStore.dispatch(retrieveToken());
  }
  window.addEventListener('resize', () =>
    appStore.dispatch(handleViewportChange(window.innerWidth))
  );
  // when authenticated, hydrate data stores
  if (!initAPIData(appStore)) {
    const unsubscribe = appStore.subscribe(() => {
      if (initAPIData(appStore)) unsubscribe();
    });
  }
};
