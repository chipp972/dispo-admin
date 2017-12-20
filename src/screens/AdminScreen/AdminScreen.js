// @flow
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Nav } from '../../components/Nav/Nav';
import { TabContainer } from '../../components/Nav/TabContainer';
import { AdminScreenDialog } from './AdminScreenDialog';
import { tabs } from '../../store/adminui/adminui.constant';

type AdminScreenProps = {
  isMobileViewport: boolean,
  currentTabIndex: number,
  changeTab: (index: number, maxTab: number) => any,
  openDialog: () => any,
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
          <Content />
        </TabContainer>
      ))}
    </SwipeableViews>
    <Nav
      tabs={tabs}
      isMobileViewport={props.isMobileViewport}
      changeTab={props.changeTab}
      currentTabIndex={props.currentTabIndex}
    />
    <AdminScreenDialog
      openDialog={props.openDialog}
      isMobileViewport={props.isMobileViewport}
    />
  </div>
);
