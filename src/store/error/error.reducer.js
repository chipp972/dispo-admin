// @flow
import { append, drop } from 'ramda';
import { toUserFriendly } from './error.helper';
import type { ErrorHandlerState } from './error.js.flow';

const initialState = {
  errorList: []
};

export const errorHandlerReducer = (
  state: ErrorHandlerState = initialState,
  action: { type: string, error: Error }
) => {
  if (action.type === 'HIDE_ERROR_MESSAGE') {
    return {
      ...state,
      errorList: drop(1, state.errorList)
    };
  } else if (/FAILURE/.test(action.type)) {
    return {
      ...state,
      errorList: append(toUserFriendly(action.error.message), state.errorList)
    };
  }
  return state;
};
