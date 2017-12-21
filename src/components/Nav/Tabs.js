// @flow
import React from 'react';
import { Tabs as MUITabs, Tab } from 'material-ui';
import type { NavProps } from './Nav.js.flow';

export const Tabs = (props: NavProps) => (
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
