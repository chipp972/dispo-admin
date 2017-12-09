// @flow

export const changeTab = (index: number, maxTab: number) => ({
  type: 'CHANGE_TAB',
  payload: { index, maxTab }
});

export const openDialog = (
  dialogId: 'user' | 'company' | 'companyType',
  isNew: boolean,
  dialogContent?: any
) => {
  switch (dialogId) {
    case 'user':
      return { type: 'OPEN_USER_DIALOG', payload: { dialogContent, isNew } };
    case 'company':
      return {
        type: 'OPEN_COMPANY_DIALOG',
        payload: { dialogContent, isNew }
      };
    case 'companyType':
      return {
        type: 'OPEN_COMPANY_TYPE_DIALOG',
        payload: { dialogContent, isNew }
      };
    default:
      return {
        type: 'OPEN_DIALOG',
        payload: { dialogId, dialogContent, isNew }
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
