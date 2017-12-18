// @flow
import React from 'react';
import { List, ListItem, Avatar, ListItemText } from 'material-ui';
import type { Company } from 'dispo-api';

type CompanyListProps = {
  company: {
    list: Company[],
    byId: { [id: string]: Company }
  }
};

export const CompanyList = (props: CompanyListProps) => (
  <List>
    {props.company.list.map(company => (
      <ListItem button key={company._id}>
        <Avatar>
          <img src={company.imageUrl} alt={company.name} />
        </Avatar>
        <ListItemText primary={company.name} secondary={company.address} />
      </ListItem>
    ))}
  </List>
);
