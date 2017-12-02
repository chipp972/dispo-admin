// @flow
import React from 'react';
import { Tabs, Tab } from 'material-ui';
import SwipeableViews from 'react-swipeable-views';
import TabContainer from './TabContainer';
import type { Node, Element } from 'react';

type TabsProps = {
  tabs: Array<{
    key: string,
    IconComponent: Element<any>,
    label: string,
    Content: Node
  }>
};
type TabsState = {
  value: number
};

export class DispoTabs extends React.Component<TabsProps, TabsState> {
  constructor(props: TabsProps) {
    super(props);
    this.state = { value: 0 };
  }

  // handle changing tab
  handleChange = (event: any, value: number) => this.setState({ value });

  // handle changing component shown when tab change
  handleChangeIndex = (index: number) => this.setState({ value: index });

  render() {
    return (
      <div style={{ padding: 30 }}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth
          indicatorColor="primary"
          textColor="primary"
        >
          {this.props.tabs.map(({ key, IconComponent, label }) => (
            <Tab key={key} icon={IconComponent} label={label} />
          ))}
        </Tabs>
        <SwipeableViews
          axis={'ltr' === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          {this.props.tabs.map(({ key, Content }) => (
            <TabContainer key={key} dir="ltr">
              { Content }
            </TabContainer>
          ))}
        </SwipeableViews>
      </div>
    );
  }
}
