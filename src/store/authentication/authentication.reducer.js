// @flow
import { ACTION_TYPE } from './authentication.constant';
import env from '../../env';
import type { AuthenticationState } from './authentication';

const initialState: AuthenticationState = {
  email: '',
  code: '',
  canSendCode: true,
  isAuthenticationPending: false,
  isAdminAuthenticated: !env.isAuthenticationActivated,
  isUserAuthenticated: false,
  isCodeReceived: false
};

export const authenticationReducer = (
  state: AuthenticationState = initialState,
  action: any
) => {
  switch (action.type) {
    case ACTION_TYPE.SEND_CODE.PENDING:
    case ACTION_TYPE.USER_LOGIN.PENDING:
      return { ...state, canSendCode: false, isAuthenticationPending: true };
    case ACTION_TYPE.ENABLE_CODE_SENDING:
      return { ...state, canSendCode: true };
    case ACTION_TYPE.SEND_CODE.SUCCESS:
      const { email } = action.payload;
      return { ...state, email, isCodeReceived: true, canSendCode: false };
    case ACTION_TYPE.RETRIEVE_TOKEN.SUCCESS:
    case ACTION_TYPE.AUTHENTICATE.SUCCESS:
    case ACTION_TYPE.USER_LOGIN.SUCCESS:
      const { token, tokenId, expireAt, isAdmin } = action.payload;
      return {
        ...state,
        token,
        tokenId,
        expireAt,
        isAdminAuthenticated: isAdmin,
        isUserAuthenticated: !isAdmin,
        isAuthenticationPending: false
      };
    case ACTION_TYPE.SEND_CODE.FAILURE:
    case ACTION_TYPE.AUTHENTICATE.FAILURE:
    case ACTION_TYPE.RESET_EMAIL:
      return {
        ...state,
        email: '',
        isAdminAuthenticated: false,
        canSendCode: true,
        isCodeReceived: false,
        isAuthenticationPending: false
      };
    case ACTION_TYPE.USER_LOGIN.FAILURE:
      return {
        ...state,
        isUserAuthenticated: false,
        isAuthenticationPending: false
      };
    case ACTION_TYPE.INVALID_OR_EXPIRED_TOKEN:
    case ACTION_TYPE.LOGOUT.SUCCESS:
      return {
        ...state,
        token: '',
        tokenId: '',
        expireAt: undefined,
        isAdminAuthenticated: false,
        isUserAuthenticated: false,
        canSendCode: true,
        isAuthenticationPending: false
      };
    default:
      return state;
  }
};
