// @flow
import { append, drop } from 'ramda';
import { toUserFriendly, toMessage } from './notification.helper';
import type { NotificationHandlerState } from './notification.js.flow';
import { ACTION_TYPE } from './notification.constant';
import { ACTION_TYPE as AUTH_ACTION_TYPE } from '../authentication/authentication.constant';

const initialState: NotificationHandlerState = {
  errorList: [],
  infoList: []
};

export const notificationHandlerReducer = (
  state: NotificationHandlerState = initialState,
  action: { type: string, error: Error }
) => {
  console.log('why no message ?', action.type);
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
    case AUTH_ACTION_TYPE.REGISTER.SUCCESS:
      return {
        ...state,
        infoList: append('Inscription reussie', state.infoList)
      };
    case AUTH_ACTION_TYPE.REGISTER.FAILURE:
      return {
        ...state,
        errorList: append(
          "Un probleme est survenu lors de l'inscription",
          state.errorList
        )
      };
    default:
      if (/FAILURE/.test(action.type)) {
        return {
          ...state,
          errorList: append(
            toUserFriendly(action.error.message),
            state.errorList
          )
        };
      } else if (/(CREATE|EDIT|REMOVE)_(A-Z+)_SUCCESS/.test(action.type)) {
        return {
          ...state,
          infoList: append(toMessage(action.type), state.infoList)
        };
      }
      return state;
  }
};
