// @flow
import React from 'react';

type TabContainerProps = {
  children: any,
  dir: string
};

export const TabContainer = ({ children, dir }: TabContainerProps) => (
  <div dir={dir} style={{ padding: 8 * 3 }}>
    {children}
  </div>
);
