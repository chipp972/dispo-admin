// @flow
import React from 'react';
import { Tabs } from './Tabs';
import { BottomNav } from './BottomNav';
import type { NavProps } from './Nav.js.flow';

export const Nav = (props: NavProps) => {
  return props.isMobileViewport ? (
    <BottomNav {...props} />
  ) : (
    <Tabs {...props} />
  );
};
