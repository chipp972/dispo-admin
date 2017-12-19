// @flow
import type { DialogId } from './adminui.js.flow';

export const changeTab = (index: number, maxTab: number) => ({
  type: 'CHANGE_TAB',
  payload: { index, maxTab }
});

export const openDialog = (
  dialogId: DialogId,
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
    case 'confirm':
      return {
        type: 'OPEN_CONFIRM_DIALOG'
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

export const openCreateDialog = (dialogId: DialogId) =>
  openDialog(dialogId, false);

export const openEditDialog = ({
  dialogId,
  dialogContent
}: {
  dialogId: DialogId,
  dialogContent: any
}) => openDialog(dialogId, true, dialogContent);

export const openConfirmDialog = () => openDialog('confirm', false);

export const closeDialog = () => ({
  type: 'CLOSE_DIALOG'
});

export const handleViewportChange = (width: number) => ({
  type: 'VIEWPORT_CHANGE',
  payload: { width }
});
