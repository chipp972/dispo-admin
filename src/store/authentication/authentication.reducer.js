// @flow
import type {
  AuthenticationState,
  AuthenticationAction,
  ApiCommunicationFailure,
  SendCodeSuccessAction,
  AuthenticateAction,
} from './authentication';

const initialState: AuthenticationState = {
  email: '',
  code: '',
  isAuthenticated: false
};

export const authenticationReducer = (
  state: AuthenticationState = initialState,
  action: AuthenticationAction
) => {
  switch (action.type) {
    case 'SEND_CODE_SUCCESS':
      (action: SendCodeSuccessAction);
      const { email } = action.payload;
      return { ...state, email };
    case 'AUTHENTICATE_SUCCESS':
    case 'TOKEN_REFRESH_SUCCESS':
    case 'RETRIEVE_TOKEN_SUCCESS':
      (action: AuthenticateAction);
      const { token, tokenId, expireAt } = action.payload;
      return {
        ...state,
        token,
        tokenId,
        expireAt: new Date(expireAt),
        isAuthenticated: true
      };
    case 'SEND_CODE_FAILURE':
    case 'AUTHENTICATE_FAILURE':
    case 'RETRIEVE_TOKEN_FAILURE':
      (action: ApiCommunicationFailure);
      return {
        ...state,
        email: '',
        code: '',
        isAuthenticated: false,
        error: action.error,
      };
    case 'INVALID_OR_EXPIRED_TOKEN':
      return {
        ...state,
        token: '',
        tokenId: '',
        expireAt: undefined,
        isAuthenticated: false,
        error: new Error('token invalide ou expire')
      };
    case 'STORE_TOKEN_FAILURE':
      return { ...state, error: action.error };
    default:
      return state;
  }
};
