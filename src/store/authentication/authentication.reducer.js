// @flow
import { ACTION_TYPE } from './authentication.constant';
import env from '../../env';
import type { AuthenticationState } from './authentication';

const initialState: AuthenticationState = {
  email: '',
  code: '',
  canSendCode: true,
  isAuthenticated: !env.isAuthenticationActivated,
  isCodeReceived: false
};

export const authenticationReducer = (
  state: AuthenticationState = initialState,
  action: any
) => {
  switch (action.type) {
    case ACTION_TYPE.SEND_CODE.PENDING:
      return { ...state, canSendCode: false };
    case ACTION_TYPE.ENABLE_CODE_SENDING:
      return { ...state, canSendCode: true };
    case ACTION_TYPE.SEND_CODE.SUCCESS:
      const { email } = action.payload;
      return { ...state, email, isCodeReceived: true, canSendCode: false };
    case ACTION_TYPE.AUTHENTICATE.SUCCESS:
    case ACTION_TYPE.RETRIEVE_TOKEN.SUCCESS:
      const { token, tokenId, expireAt } = action.payload;
      return {
        ...state,
        token,
        tokenId,
        expireAt,
        isAuthenticated: true
      };
    case ACTION_TYPE.SEND_CODE.FAILURE:
    case ACTION_TYPE.AUTHENTICATE.FAILURE:
    case ACTION_TYPE.RESET_EMAIL:
      return {
        ...state,
        email: '',
        isAuthenticated: false,
        canSendCode: true,
        isCodeReceived: false
      };
    case ACTION_TYPE.INVALID_OR_EXPIRED_TOKEN:
    case ACTION_TYPE.LOGOUT.SUCCESS:
      return {
        ...state,
        token: '',
        tokenId: '',
        expireAt: undefined,
        isAuthenticated: false,
        canSendCode: true
      };
    default:
      return state;
  }
};
