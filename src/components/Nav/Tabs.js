// @flow
import React from 'react';
import { Tabs as MUITabs, Tab } from 'material-ui';
import type { Node, ElementType } from 'react';

type TabsProps = {
  tabs: Array<{
    key: string,
    IconComponent: ElementType,
    label: string,
    Content: Node
  }>,
  changeTab: (index: number, maxTab: number) => any,
  currentTabIndex: number
};

export const Tabs = (props: TabsProps) => (
  <MUITabs
    value={props.currentTabIndex}
    onChange={(event, index) => props.changeTab(index, props.tabs.length)}
    fullWidth
    indicatorColor="primary"
    textColor="primary"
  >
    {props.tabs.map(({ key, IconComponent, label }) => (
      <Tab key={key} icon={<IconComponent />} label={label} />
    ))}
  </MUITabs>
);
