// @flow
import React from 'react';
import { Nav } from '../components/Nav/Nav';
import SwipeableViews from 'react-swipeable-views';
import { TabContainer } from '../components/Nav/TabContainer';
import BuisinessIcon from 'material-ui-icons/Business';
import WorkIcon from 'material-ui-icons/Work';
import FaceIcon from 'material-ui-icons/Face';
import { UserListContainer } from '../containers/user/UserListContainer';
import { CompanyListContainer } from '../containers/company/CompanyListContainer';
import { CompanyTypeListContainer } from '../components/CompanyType/CompanyTypeList/CompanyTypeListContainer';
import { AdminScreenDialog } from './AdminScreenDialog';

type AdminScreenProps = {
  isAuthenticated: boolean,
  isMobileViewport: boolean,
  isUserDialogOpen: boolean,
  isCompanyDialogOpen: boolean,
  isCompanyTypeDialogOpen: boolean,
  currentTabIndex: number,
  changeTab: (index: number, maxTab: number) => any,
  openDialog: (dialogId: string, initialState?: any) => any,
  closeDialog: () => any
};

const tabs = [
  {
    id: 'user',
    key: 'tab0',
    IconComponent: FaceIcon,
    label: 'UTILISATEUR',
    Content: <UserListContainer />
  },
  {
    id: 'companyType',
    key: 'tab1',
    IconComponent: WorkIcon,
    label: `TYPE D'ENTREPRISE`,
    Content: <CompanyTypeListContainer />
  },
  {
    id: 'company',
    key: 'tab2',
    IconComponent: BuisinessIcon,
    label: 'ENTREPRISE',
    Content: <CompanyListContainer />
  }
];

export const AdminScreen = (props: AdminScreenProps) => (
  <div
    style={{
      flex: 1,
      display: 'flex',
      flexFlow: props.isMobileViewport ? 'column wrap' : 'column-reverse wrap'
    }}
  >
    <SwipeableViews
      style={{ flex: 1, padding: 30 }}
      axis={'ltr' === 'rtl' ? 'x-reverse' : 'x'}
      index={props.currentTabIndex}
      onChangeIndex={index => props.changeTab(index, tabs.length)}
    >
      {tabs.map(({ key, Content }) => (
        <TabContainer key={key} dir="ltr">
          {Content}
        </TabContainer>
      ))}
    </SwipeableViews>
    <Nav
      tabs={tabs}
      isMobileViewport={props.isMobileViewport}
      changeTab={props.changeTab}
      currentTabIndex={props.currentTabIndex}
    />
    <AdminScreenDialog {...props} tabs={tabs} />
  </div>
);
