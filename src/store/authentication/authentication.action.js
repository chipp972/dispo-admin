// @flow
import { authAPI } from 'dispo-api';
import {
  ACTION_TYPE,
  LOCAL_STORAGE,
  CODE_SENDING_DELAY
} from './authentication.constant';
import env from '../../env';
import type { AuthRes } from 'dispo-api';
import type {
  StoreTokenAction,
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
    localStorage.setItem(LOCAL_STORAGE.TOKEN, token);
    localStorage.setItem(LOCAL_STORAGE.TOKEN_ID, tokenId);
    localStorage.setItem(LOCAL_STORAGE.EXPIRE_AT, expireAt);
    return dispatch({ type: ACTION_TYPE.STORE_TOKEN.SUCCESS });
  } catch (error) {
    return dispatch({ type: ACTION_TYPE.STORE_TOKEN.FAILURE, error });
  }
};

export const retrieveToken = () => async (dispatch: Dispatch<*>) => {
  try {
    const expireAtString = localStorage.getItem(LOCAL_STORAGE.EXPIRE_AT);
    const payload = {
      token: localStorage.getItem(LOCAL_STORAGE.TOKEN) || '',
      tokenId: localStorage.getItem(LOCAL_STORAGE.TOKEN_ID),
      expireAt: expireAtString ? new Date(expireAtString) : new Date()
    };

    const now = new Date();
    if (
      now.getTime() < payload.expireAt.getTime() &&
      payload.token.length > 0
    ) {
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

export const refreshToken = () => async (
  dispatch: Dispatch<*>,
  getState: () => any
) => {
  try {
    dispatch({
      type: ACTION_TYPE.TOKEN_REFRESH.PENDING
    });
    const { authentication } = getState();
    const { tokenId, email, code } = authentication;
    const res = await fetcher.admin.refreshToken({ tokenId, email, code });
    dispatch({
      type: ACTION_TYPE.TOKEN_REFRESH.SUCCESS,
      payload: res
    });
  } catch (error) {
    return dispatch({ type: ACTION_TYPE.TOKEN_REFRESH.FAILURE, error });
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
    dispatch({
      type: ACTION_TYPE.AUTHENTICATE.SUCCESS,
      payload: { ...res }
    });
    return dispatch(storeToken(res));
  } catch (error) {
    dispatch({
      type: ACTION_TYPE.AUTHENTICATE.FAILURE,
      error
    });
  }
};
