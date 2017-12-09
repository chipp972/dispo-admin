// @flow
import React from 'react';
import { Tabs } from './Tabs';
import { BottomNav } from './BottomNav';
import type { ElementType } from 'react';

type NavProps = {
  tabs: Array<{
    key: string,
    IconComponent: ElementType,
    label: string,
    Content: Node
  }>,
  isMobileViewport: boolean,
  changeTab: (index: number, maxTabs: number) => any,
  currentTabIndex: number
};

export const Nav = (props: NavProps) => {
  return props.isMobileViewport ? (
    <BottomNav
      tabs={props.tabs}
      changeTab={props.changeTab}
      currentTabIndex={props.currentTabIndex}
    />
  ) : (
    <Tabs
      tabs={props.tabs}
      changeTab={props.changeTab}
      currentTabIndex={props.currentTabIndex}
    />
  );
};
