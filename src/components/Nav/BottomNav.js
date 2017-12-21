// @flow
import React from 'react';
import BottomNavigation, {
  BottomNavigationButton
} from 'material-ui/BottomNavigation';
import type { NavProps } from './Nav.js.flow';

export const BottomNav = (props: NavProps) => (
  <BottomNavigation
    style={{
      width: '100%',
      position: 'fixed',
      bottom: 0,
      boxShadow: '0 -20px 25px -20px rgba(0,0,0,.3)'
    }}
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
