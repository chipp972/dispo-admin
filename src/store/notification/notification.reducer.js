// @flow
import { append, drop } from 'ramda';
import {
  toUserFriendly,
  toMessage,
  isHandledActionType
} from './notification.helper';
import type { NotificationHandlerState } from './notification.js.flow';
import { ACTION_TYPE } from './notification.constant';

const initialState = {
  errorList: [],
  infoList: []
};

export const notificationHandlerReducer = (
  state: NotificationHandlerState = initialState,
  action: { type: string, error: Error }
) => {
  if (/FAILURE/.test(action.type)) {
    return {
      ...state,
      errorList: append(toUserFriendly(action.error.message), state.errorList)
    };
  } else if (/SUCCESS/.test(action.type)) {
    return {
      ...state,
      infoList:
        isHandledActionType(action.type) &&
        append(toMessage(action.type), state.infoList)
    };
  }

  switch (action.type) {
    case ACTION_TYPE.HIDE.ERROR:
      return {
        ...state,
        errorList: drop(1, state.errorList)
      };
    case ACTION_TYPE.HIDE.INFO:
      return {
        ...state,
        infoList: drop(1, state.infoList)
      };
    default:
      return state;
  }
};
