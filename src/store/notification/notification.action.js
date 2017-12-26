// @flow
import { ACTION_TYPE, DELAY_BETWEEN_MESSAGE } from './notification.constant';
import { Dispatch } from 'redux';

export const hideError = () => (dispatch: Dispatch) => {
  setTimeout(
    () => dispatch({ type: ACTION_TYPE.HIDE.ERROR }),
    DELAY_BETWEEN_MESSAGE
  );
};

export const hideInfo = () => (dispatch: Dispatch) => {
  setTimeout(
    () => dispatch({ type: ACTION_TYPE.HIDE.INFO }),
    DELAY_BETWEEN_MESSAGE
  );
};
