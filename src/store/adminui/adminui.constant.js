// @flow
import BuisinessIcon from 'material-ui-icons/Business';
import WorkIcon from 'material-ui-icons/Work';
import FaceIcon from 'material-ui-icons/Face';
import { UserListContainer } from '../../containers/User/UserList/UserListContainer';
import { CompanyListContainer } from '../../containers/Company/CompanyList/CompanyListContainer';
import { CompanyTypeListContainer } from '../../containers/CompanyType/CompanyTypeList/CompanyTypeListContainer';

export const TAB_ID = {
  user: 'user',
  company: 'company',
  companyType: 'companyType',
  default: 'user'
};

export const DIALOG_ID = {
  create: 'create',
  update: 'update',
  delete: 'delete',
  none: 'none'
};

export const ACTION_TYPE = {
  CHANGE_TAB: 'CHANGE_TAB',
  OPEN_DIALOG: 'OPEN_DIALOG',
  CLOSE_DIALOG: 'CLOSE_DIALOG',
  VIEWPORT_CHANGE: 'VIEWPORT_CHANGE',
  TOGGLE_MENU: 'TOGGLE_MENU',
  OPEN_REGISTER_DIALOG: 'OPEN_REGISTER_DIALOG'
};

export const tabs = [
  {
    id: TAB_ID.user,
    key: TAB_ID.user,
    IconComponent: FaceIcon,
    label: 'UTILISATEUR',
    Content: UserListContainer
  },
  {
    id: TAB_ID.companyType,
    key: TAB_ID.companyType,
    IconComponent: WorkIcon,
    label: 'TYPE',
    Content: CompanyTypeListContainer
  },
  {
    id: TAB_ID.company,
    key: TAB_ID.company,
    IconComponent: BuisinessIcon,
    label: 'ENTREPRISE',
    Content: CompanyListContainer
  }
];
