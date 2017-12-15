// @flow
import React from 'react';
import { Nav } from '../components/Nav/Nav';
import SwipeableViews from 'react-swipeable-views';
import { TabContainer } from '../components/Nav/TabContainer';
import BuisinessIcon from 'material-ui-icons/Business';
import WorkIcon from 'material-ui-icons/Work';
import FaceIcon from 'material-ui-icons/Face';
import { UserList } from '../components/User/UserList';
import { CompanyList } from '../components/Company/CompanyList';
import { ConnectedCompanyTypeList } from '../containers/DataAPIContainer';
import { AdminScreenDialog } from './AdminScreenDialog';

const tabs = [
  {
    id: 'user',
    key: 'tab0',
    IconComponent: FaceIcon,
    label: 'UTILISATEURS',
    Content: <UserList users={[]} />
  },
  {
    id: 'companyType',
    key: 'tab1',
    IconComponent: WorkIcon,
    label: `TYPE D'ENTREPRISE`,
    Content: <ConnectedCompanyTypeList />
  },
  {
    id: 'company',
    key: 'tab2',
    IconComponent: BuisinessIcon,
    label: 'ENTREPRISE',
    Content: <CompanyList companies={[]} />
  }
];

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
