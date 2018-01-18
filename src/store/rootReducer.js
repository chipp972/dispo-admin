// @flow
import { authenticationReducer } from './authentication/authentication.reducer';
import { adminuiReducer } from './adminui/adminui.reducer';
import { apiDataReducer } from './apidata/api.reducer';
import { notificationHandlerReducer } from './notification/notification.reducer';

export const dispoAdmin = {
  authentication: authenticationReducer,
  adminui: adminuiReducer,
  apidata: apiDataReducer,
  notification: notificationHandlerReducer
};
