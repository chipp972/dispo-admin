// @flow
import { createAsyncActionType } from '../helper';

export const ACTION_TYPE = {
  STORE_TOKEN: createAsyncActionType('STORE_TOKEN'),
  RETRIEVE_TOKEN: createAsyncActionType('RETRIEVE_TOKEN'),
  SEND_CODE: createAsyncActionType('SEND_CODE'),
  AUTHENTICATE: createAsyncActionType('AUTHENTICATE'),
  LOGOUT: createAsyncActionType('LOGOUT'),
  INVALID_OR_EXPIRED_TOKEN: 'INVALID_OR_EXPIRED_TOKEN',
  ENABLE_CODE_SENDING: 'ENABLE_CODE_SENDING',
  RESET_EMAIL: 'RESET_EMAIL'
};

export const LOCAL_STORAGE = {
  TOKEN: 'TOKEN',
  TOKEN_ID: 'TOKEN_ID',
  EXPIRE_AT: 'EXPIRE_AT'
};

export const CODE_SENDING_DELAY = 20000;
