// @flow
import React from 'react';
import { List as MUIList, ListItem, Avatar, ListItemText } from 'material-ui';

type ListProps<T> = {
  itemList: T[],
  keyFun: (item: T) => string,
  imgFun: (item: T) => string,
  primaryFun: (item: T) => string,
  secondaryFun: (item: T) => string
};

export function List<T>(props: ListProps<T>) {
  return (
    <MUIList>
      {props.itemList.map((item) => (
        <ListItem button key={props.keyFun(item)}>
          {props.imgFun && (
            <Avatar>
              <img src={props.imgFun(item)} alt={props.primaryFun(item)} />
            </Avatar>
          )}
          <ListItemText
            primary={props.primaryFun(item)}
            secondary={props.secondaryFun(item)}
          />
        </ListItem>
      ))}
    </MUIList>
  );
}
