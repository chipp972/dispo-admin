// @flow
import type { AdminUIState } from './adminui.js.flow';
import env from '../../env';

const initialState: AdminUIState = {
  isMobileViewport: window.innerWidth < env.ui.mobileMaxWidth,
  currentTabIndex: 0,
  currentOpenDialog: 'none',
  isUserDialogOpen: false,
  isCompanyTypeDialogOpen: false,
  isCompanyDialogOpen: false,
  isRemoveDialogOpen: false,
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
        currentOpenDialog: 'user',
        isUserDialogOpen: true,
        isCompanyDialogOpen: false,
        isCompanyTypeDialogOpen: false,
        isModification: action.payload.isModification,
        dialogContent: action.payload.dialogContent
      };
    case 'OPEN_COMPANY_DIALOG':
      return {
        ...state,
        currentOpenDialog: 'company',
        isUserDialogOpen: false,
        isCompanyDialogOpen: true,
        isCompanyTypeDialogOpen: false,
        isModification: action.payload.isModification,
        dialogContent: action.payload.dialogContent
      };
    case 'OPEN_COMPANY_TYPE_DIALOG':
      return {
        ...state,
        currentOpenDialog: 'companyType',
        isUserDialogOpen: false,
        isCompanyDialogOpen: false,
        isCompanyTypeDialogOpen: true,
        isModification: action.payload.isModification,
        dialogContent: action.payload.dialogContent
      };
    case 'OPEN_CONFIRM_DIALOG':
      return {
        ...state,
        currentOpenDialog: 'confirm'
      };
    case 'CLOSE_DIALOG':
      return {
        ...state,
        currentOpenDialog: 'none',
        isUserDialogOpen: false,
        isCompanyDialogOpen: false,
        isCompanyTypeDialogOpen: false
      };
    case 'CHANGE_TAB':
      const { index, maxTab } = action.payload;
      const correctIndex = index < 0 ? maxTab - 1 : index % maxTab;
      return { ...state, currentTabIndex: correctIndex };
    case 'VIEWPORT_CHANGE':
      return {
        ...state,
        isMobileViewport: action.payload.width < env.ui.mobileMaxWidth
      };
    default:
      return state;
  }
};
