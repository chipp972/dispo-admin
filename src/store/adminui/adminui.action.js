// @flow
import { ACTION_TYPE } from './adminui.constant';

export const changeTab = (index: number, maxTab: number) => ({
  type: ACTION_TYPE.CHANGE_TAB,
  payload: { index, maxTab }
});

export const openDialog = ({
  dialogId,
  dialogContent
}: {
  dialogId: string,
  dialogContent?: any
}) => ({
  type: ACTION_TYPE.OPEN_DIALOG,
  payload: { dialogId, dialogContent }
});

export const openRegisterDialog = () => ({
  type: ACTION_TYPE.OPEN_REGISTER_DIALOG
});

export const closeDialog = () => ({
  type: ACTION_TYPE.CLOSE_DIALOG
});

export const handleViewportChange = (width: number) => ({
  type: ACTION_TYPE.VIEWPORT_CHANGE,
  payload: { width }
});

export const toggleMenu = () => ({
  type: ACTION_TYPE.TOGGLE_MENU
});
