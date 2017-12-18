// @flow

export const changeTab = (index: number, maxTab: number) => ({
  type: 'CHANGE_TAB',
  payload: { index, maxTab }
});

export const openDialog = (
  dialogId: 'user' | 'company' | 'companyType',
  isModification: boolean,
  dialogContent?: any
) => {
  switch (dialogId) {
    case 'user':
      return {
        type: 'OPEN_USER_DIALOG',
        payload: {
          dialogContent,
          isModification
        }
      };
    case 'company':
      return {
        type: 'OPEN_COMPANY_DIALOG',
        payload: {
          dialogContent,
          isModification
        }
      };
    case 'companyType':
      return {
        type: 'OPEN_COMPANY_TYPE_DIALOG',
        payload: {
          dialogContent,
          isModification
        }
      };
    default:
      return {
        type: 'OPEN_DIALOG',
        payload: {
          dialogId,
          dialogContent,
          isModification
        }
      };
  }
};

export const closeDialog = () => ({
  type: 'CLOSE_DIALOG'
});

export const handleViewportChange = (width: number) => ({
  type: 'VIEWPORT_CHANGE',
  payload: { width }
});
