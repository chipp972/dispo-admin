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

  const unsubscribe = appStore.subscribe(() => {
    const { authentication } = appStore.getState();
    const { token } = authentication;
    if (token) {
      appStore.dispatch(crud.companyType.create({ name: 'garage' }));
      appStore.dispatch(crud.company.getAll());
      appStore.dispatch(crud.user.getAll());
      appStore.dispatch(crud.companyType.getAll());
      unsubscribe();
    }
  });
};

// TODO: TO DELETE
setTimeout(() => {
  crud.companyType
    .getAll({
      name: 'plombier'
    })(console.log, store.getState)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}, 3000);
