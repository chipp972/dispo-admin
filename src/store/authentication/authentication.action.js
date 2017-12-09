// @flow
import { authAPI } from 'dispo-api';
import env from '../../env';
import type { AuthRes, PasswordLessStartRes } from 'dispo-api';
import type {
  StoreTokenAction,
  AuthenticationAction,
  AuthenticationState
} from './authentication.js.flow';

type GetState = () => AuthenticationState;
type ThunkAction<A> = (dispatch: Dispatch<A>, getState: GetState) => any;
type Dispatch<A> = (action: A | ThunkAction<*>) => any;

const fetcher = authAPI(fetch, env.api.url);

export const storeToken: ThunkAction<StoreTokenAction> = ({
  token,
  tokenId,
  expireAt
}: AuthRes) => async (dispatch: Dispatch<StoreTokenAction>) => {
  try {
    localStorage.setItem('TOKEN', token);
    localStorage.setItem('TOKEN_ID', tokenId);
    localStorage.setItem('EXPIRE_AT', expireAt);
    return dispatch({ type: 'STORE_TOKEN_SUCCESS' });
  } catch (error) {
    return dispatch({ type: 'STORE_TOKEN_FAILURE', error });
  }
};

export const retrieveToken = () => async (dispatch: Dispatch) => {
  try {
    const token = localStorage.getItem('TOKEN') || '';
    const tokenId = localStorage.getItem('TOKEN_ID');
    const expireAtString = localStorage.getItem('EXPIRE_AT');
    const expireAt = expireAtString ? new Date(expireAtString) : new Date();
    const now = new Date();
    if (now.getTime() < expireAt.getTime() && token.length > 0) {
      return dispatch({
        type: 'RETRIEVE_TOKEN_SUCCESS',
        payload: {
          token,
          tokenId,
          expireAt
        }
      });
    }
    return dispatch({ type: 'INVALID_OR_EXPIRED_TOKEN' });
  } catch (error) {
    return dispatch({ type: 'RETRIEVE_TOKEN_FAILURE', error });
  }
};

export const refreshToken = () => async (
  dispatch: Dispatch,
  getState: () => any
) => {
  try {
    const { authentication } = getState();
    const { tokenId, email, code } = authentication;
    const res = await fetcher.admin.refreshToken({ tokenId, email, code });
    dispatch({
      type: 'TOKEN_REFRESH_SUCCESS',
      payload: res
    });
  } catch (error) {
    return dispatch({ type: 'TOKEN_REFRESH_FAILURE', error });
  }
};

export type SendCodeAction = {
  type: 'SEND_CODE_SUCCESS',
  payload: PasswordLessStartRes
};
export const sendCode = (email: string) => async (dispatch: Dispatch) => {
  try {
    const res = await fetcher.admin.sendCode({ email });
    dispatch({
      type: 'SEND_CODE_SUCCESS',
      payload: { ...res }
    });
  } catch (error) {
    dispatch({
      type: 'SEND_CODE_FAILED',
      error
    });
  }
};

export interface AuthenticateAction extends AuthenticationAction {
  type: 'AUTHENTICATE_SUCCESS';
  payload: AuthRes;
}
export const authenticate = (email: string, code: string) => async (
  dispatch: Dispatch
) => {
  try {
    const res = await fetcher.admin.authenticate({ email, code });
    dispatch({
      type: 'AUTHENTICATE_SUCCESS',
      payload: { ...res }
    });
    return dispatch(storeToken(res));
  } catch (error) {
    dispatch({
      type: 'AUTHENTICATE_FAILED',
      error
    });
  }
};
