// @flow
import type { AdminUIState } from './adminui.js.flow';

const initialState: AdminUIState = {
  isMobileViewport: window.innerWidth < 600,
  currentTabIndex: 0,
  isUserDialogOpen: false,
  isCompanyTypeDialogOpen: false,
  isCompanyDialogOpen: false,
  isModification: false
};

export const adminuiReducer = (
  state: AdminUIState = initialState,
  action: any
) => {
  switch (action.type) {
    case 'OPEN_USER_DIALOG':
      return {
        ...state,
        isUserDialogOpen: true,
        isCompanyDialogOpen: false,
        isCompanyTypeDialogOpen: false,
        isModification: action.payload.isModification,
        dialogContent: action.payload.dialogContent
      };
    case 'OPEN_COMPANY_DIALOG':
      return {
        ...state,
        isUserDialogOpen: false,
        isCompanyDialogOpen: true,
        isCompanyTypeDialogOpen: false,
        isModification: action.payload.isModification,
        dialogContent: action.payload.dialogContent
      };
    case 'OPEN_COMPANY_TYPE_DIALOG':
      return {
        ...state,
        isUserDialogOpen: false,
        isCompanyDialogOpen: false,
        isCompanyTypeDialogOpen: true,
        isModification: action.payload.isModification,
        dialogContent: action.payload.dialogContent
      };
    case 'CLOSE_DIALOG':
      return {
        ...state,
        isUserDialogOpen: false,
        isCompanyDialogOpen: false,
        isCompanyTypeDialogOpen: false
      };
    case 'CHANGE_TAB':
      const { index, maxTab } = action.payload;
      const correctIndex = index < 0 ? maxTab - 1 : index % maxTab;
      return { ...state, currentTabIndex: correctIndex };
    case 'VIEWPORT_CHANGE':
      return { ...state, isMobileViewport: action.payload.width < 600 };
    default:
      return state;
  }
};
