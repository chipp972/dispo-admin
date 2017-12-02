// @flow
import type { AuthenticationAction } from './authentication';
// import type { State } from '../state';
import type { AuthRes } from 'dispo-api';
import type {
  SendCodeAction,
} from './authentication.action';

export type AuthenticationState = {
  email: string,
  code: string,
  token?: string,
  tokenId?: string,
  expireAt?: Date,
  error?: Error,
  isAuthenticated: boolean,
};

const initialState: AuthenticationState = {
  email: '',
  code: '',
  isAuthenticated: false,
};

export const authenticationReducer = (
  state: AuthenticationState = initialState,
  action: AuthenticationAction
) => {
  switch (action.type) {
    case 'SEND_CODE_SUCCESS':
      const { email } = (action: SendCodeAction).payload;
      return { ...state, email };
    case 'AUTHENTICATE_SUCCESS':
    case 'TOKEN_REFRESH_SUCCESS':
    case 'RETRIEVE_TOKEN_SUCCESS':
      const { token, tokenId, expireAt } = (action.payload: AuthRes);
      return {
        ...state,
        token,
        tokenId,
        expireAt: new Date(expireAt),
        isAuthenticated: true,
      };
    case 'SEND_CODE_FAILURE':
    case 'AUTHENTICATE_FAILURE':
      return {
        ...state,
        email: '',
        code: '',
        isAuthenticated: false,
      };
    case 'RETRIEVE_TOKEN_FAILURE':
    case 'INVALID_OR_EXPIRED_TOKEN':
      return {
        ...state,
        token: '',
        tokenId: '',
        expireAt: undefined,
        error: action.error,
        isAuthenticated: false,
      };
    case 'STORE_TOKEN_FAILURE':
      return { ...state, error: action.error };
    default:
      return state;
  }
};
