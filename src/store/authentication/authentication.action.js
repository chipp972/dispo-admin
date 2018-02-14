// @flow
import { authAPI } from 'dispo-api';
import {
  ACTION_TYPE,
  LOCAL_STORAGE,
  CODE_SENDING_DELAY
} from './authentication.constant';
import env from '../../env';
import type { UserData } from 'dispo-api';
import type { AuthenticationState } from './authentication.js.flow';

type GetState = () => AuthenticationState;
type ThunkAction<A> = (any) => (dispatch: Dispatch<A>, getState: GetState) => any;
type Dispatch<A> = (action: A | ThunkAction<*>) => any;
type AuthResponse = {
  token: string,
  tokenId: string,
  expireAt: number,
  isAdmin: boolean
};

const fetcher = authAPI(fetch, env.api.url);

export const storeToken: ThunkAction<*> = ({
  token,
  tokenId,
  expireAt,
  isAdmin
}: AuthResponse) => async (dispatch: Dispatch<*>) => {
  try {
    localStorage.setItem(LOCAL_STORAGE.TOKEN, token);
    localStorage.setItem(LOCAL_STORAGE.TOKEN_ID, tokenId);
    localStorage.setItem(LOCAL_STORAGE.EXPIRE_AT, `${expireAt}`);
    localStorage.setItem(LOCAL_STORAGE.IS_ADMIN, isAdmin ? '1' : '0');
    return dispatch({ type: ACTION_TYPE.STORE_TOKEN.SUCCESS });
  } catch (error) {
    return dispatch({ type: ACTION_TYPE.STORE_TOKEN.FAILURE, error });
  }
};

export const retrieveToken = () => async (dispatch: Dispatch<*>) => {
  try {
    const expireAtSeconds = localStorage.getItem(LOCAL_STORAGE.EXPIRE_AT);
    const payload = {
      token: localStorage.getItem(LOCAL_STORAGE.TOKEN) || '',
      tokenId: localStorage.getItem(LOCAL_STORAGE.TOKEN_ID),
      expireAt: parseInt(expireAtSeconds, 10) || Date.now() / 1000,
      isAdmin: localStorage.getItem(LOCAL_STORAGE.IS_ADMIN) === '1'
    };

    const now = Date.now() / 1000;
    if (now < payload.expireAt && payload.token.length > 0) {
      return dispatch({
        type: ACTION_TYPE.RETRIEVE_TOKEN.SUCCESS,
        payload
      });
    }
    return dispatch({ type: ACTION_TYPE.INVALID_OR_EXPIRED_TOKEN });
  } catch (error) {
    return dispatch({ type: ACTION_TYPE.RETRIEVE_TOKEN.FAILURE, error });
  }
};

export const sendCode = (email: string) => async (dispatch: Dispatch<*>) => {
  try {
    dispatch({
      type: ACTION_TYPE.SEND_CODE.PENDING
    });
    setTimeout(
      () =>
        dispatch({
          type: ACTION_TYPE.ENABLE_CODE_SENDING
        }),
      CODE_SENDING_DELAY
    );
    const res = await fetcher.admin.sendCode({ email });
    dispatch({
      type: ACTION_TYPE.SEND_CODE.SUCCESS,
      payload: { ...res }
    });
  } catch (error) {
    dispatch({
      type: ACTION_TYPE.SEND_CODE.FAILURE,
      error
    });
  }
};

export const authenticate = (email: string, code: string) => async (
  dispatch: Dispatch<*>
) => {
  try {
    dispatch({
      type: ACTION_TYPE.AUTHENTICATE.PENDING
    });
    const res = await fetcher.admin.authenticate({ email, code });
    const payload = { ...res, isAdmin: true };
    dispatch({
      type: ACTION_TYPE.AUTHENTICATE.SUCCESS,
      payload
    });
    return dispatch(storeToken(payload));
  } catch (error) {
    dispatch({
      type: ACTION_TYPE.AUTHENTICATE.FAILURE,
      error
    });
  }
};

export const resetEmail = () => ({
  type: ACTION_TYPE.RESET_EMAIL
});

export const logout = () => async (
  dispatch: Dispatch<*>,
  getState: GetState
) => {
  try {
    dispatch({
      type: ACTION_TYPE.LOGOUT.PENDING
    });
    const { isAdminAuthenticated, isUserAuthenticated } = getState();
    const tokenId = localStorage.getItem(LOCAL_STORAGE.TOKEN_ID) || '';
    if (isAdminAuthenticated) {
      await fetcher.admin.logout(tokenId);
    } else if (isUserAuthenticated) {
      await fetcher.user.logout(tokenId);
    }
    localStorage.removeItem(LOCAL_STORAGE.TOKEN);
    localStorage.removeItem(LOCAL_STORAGE.TOKEN_ID);
    localStorage.removeItem(LOCAL_STORAGE.EXPIRE_AT);
    localStorage.removeItem(LOCAL_STORAGE.IS_ADMIN);
    dispatch({
      type: ACTION_TYPE.LOGOUT.SUCCESS
    });
  } catch (error) {
    dispatch({
      type: ACTION_TYPE.LOGOUT.FAILURE,
      error
    });
  }
};

export const userLogin = (email: string, password: string) => async (
  dispatch: Dispatch<*>
) => {
  try {
    dispatch({ type: ACTION_TYPE.USER_LOGIN.PENDING });
    const res = await fetcher.user.login({ email, password });
    const payload = { ...res, isAdmin: false };
    dispatch({
      type: ACTION_TYPE.USER_LOGIN.SUCCESS,
      payload
    });
    return dispatch(storeToken(payload));
  } catch (error) {
    dispatch({
      type: ACTION_TYPE.USER_LOGIN.FAILURE,
      error
    });
  }
};

export const userRegister = (userData: UserData) => async (
  dispatch: Dispatch<*>
) => {
  try {
    dispatch({ type: ACTION_TYPE.REGISTER.PENDING });
    const res = await fetcher.user.register(userData);
    dispatch({
      type: ACTION_TYPE.REGISTER.SUCCESS,
      payload: { ...res }
    });
  } catch (error) {
    dispatch({
      type: ACTION_TYPE.REGISTER.FAILURE,
      error
    });
  }
};
