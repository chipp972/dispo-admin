// @flow
import React from 'react';
import { List, ListItem, ListItemText } from 'material-ui';
import type { CompanyType } from 'dispo-api';

type CompanyTypeListProps = {
  companytype: {
    list: CompanyType[],
    byId: { [id: string]: CompanyType }
  }
};

export const CompanyTypeList = (props: CompanyTypeListProps) => (
  <List>
    {props.companytype.list.map((companyType) => (
      <ListItem button key={companyType._id}>
        <ListItemText primary={companyType.name} />
      </ListItem>
    ))}
  </List>
);

