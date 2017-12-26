// @flow
import { combineReducers } from 'redux';
import { authenticationReducer } from './authentication/authentication.reducer';
import { adminuiReducer } from './adminui/adminui.reducer';
import { apiDataReducer } from './apidata/api.reducer';
import { notificationHandlerReducer } from './notification/notification.reducer';
import type { Reducer } from 'redux';

export const dispoAdmin: Reducer = combineReducers({
  authentication: authenticationReducer,
  adminui: adminuiReducer,
  apidata: apiDataReducer,
  notification: notificationHandlerReducer
});
