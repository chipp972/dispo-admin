// @flow
import React from 'react';
import BottomNavigation, {
  BottomNavigationButton
} from 'material-ui/BottomNavigation';
import type { Node, ElementType } from 'react';

type BottomNavProps = {
  tabs: Array<{
    key: string,
    IconComponent: ElementType,
    label: string,
    Content: Node
  }>,
  changeTab: (index: number, maxTab: number) => any,
  currentTabIndex: number
};

export const BottomNav = (props: BottomNavProps) => (
  <BottomNavigation
    style={{ width: '100%', position: 'fixed', bottom: 0, boxShadow: '0 -20px 25px -20px rgba(0,0,0,.3)' }}
    value={props.currentTabIndex}
    onChange={(event, index) => props.changeTab(index, props.tabs.length)}
  >
    {props.tabs.map(({ key, IconComponent, label }) => (
      <BottomNavigationButton
        key={key}
        icon={<IconComponent />}
        label={label}
      />
    ))}
  </BottomNavigation>
);
