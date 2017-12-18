// @flow
import React from 'react';
import { List, ListItem, ListItemText } from 'material-ui';
import type { User } from 'dispo-api';

type UserListProps = {
  user: {
    list: User[],
    byId: { [id: string]: User }
  }
};

export const UserList = (props: UserListProps) => (
  <List>
    {props.user.list.map((user: User) => (
      <ListItem button key={user._id}>
        <ListItemText
          primary={user.email}
          secondary={`${user.firstName} ${user.lastName}`}
        />
      </ListItem>
    ))}
  </List>
);
