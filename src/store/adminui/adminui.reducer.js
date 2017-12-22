// @flow
import { TAB_ID, DIALOG_ID, ACTION_TYPE } from './adminui.constant';
import env from '../../env';
import { tabs } from './adminui.constant';
import type { AdminUIState } from './adminui.js.flow';

const initialState: AdminUIState = {
  isMobileViewport: window.innerWidth < env.ui.mobileMaxWidth,
  currentTabIndex: 0,
  currentTabId: TAB_ID.default,
  currentOpenDialog: DIALOG_ID.none,
  isMenuOpen: false
};

export const adminuiReducer = (
  state: AdminUIState = initialState,
  action: any
) => {
  switch (action.type) {
    case ACTION_TYPE.OPEN_DIALOG:
      const { dialogId, dialogContent } = action.payload;
      return {
        ...state,
        currentOpenDialog: dialogId,
        dialogContent: dialogContent
      };
    case ACTION_TYPE.CLOSE_DIALOG:
      return {
        ...state,
        currentOpenDialog: DIALOG_ID.none,
        dialogContent: undefined
      };
    case ACTION_TYPE.CHANGE_TAB:
      const { index, maxTab } = action.payload;
      const correctIndex = index < 0 ? maxTab - 1 : index % maxTab;
      return {
        ...state,
        currentTabIndex: correctIndex,
        currentTabId: tabs[correctIndex].id
      };
    case ACTION_TYPE.VIEWPORT_CHANGE:
      return {
        ...state,
        isMobileViewport: action.payload.width < env.ui.mobileMaxWidth
      };
    case ACTION_TYPE.TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    default:
      return state;
  }
};
