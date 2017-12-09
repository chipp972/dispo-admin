// @flow
import React from 'react';
import { List, ListItem, ListItemText } from 'material-ui';
import type { User } from 'dispo-api';

type CompanyTypeListProps = {
  users: User[]
};

export const UserList = (props: CompanyTypeListProps) => (
  <List>
    {props.users.map((user: User) => (
      <ListItem button key={user._id}>
        <ListItemText
          primary={user.email}
          secondary={`${user.firstName} ${user.lastName}`}
        />
      </ListItem>
    ))}
  </List>
);
