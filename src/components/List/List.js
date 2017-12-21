// @flow
import React from 'react';
import {
  List as MUIList,
  ListItem,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from 'material-ui';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';

type ListProps = {
  itemList: any[],
  keyFun: (item: any) => string,
  imgFun?: (item: any) => string,
  primaryFun: (item: any) => string,
  secondaryFun?: (item: any) => string,
  openEditDialog: (item: any) => any,
  openDeleteDialog: (item: any) => any
};

export function List(props: ListProps) {
  return (
    <MUIList>
      {props.itemList.map(item => (
        <ListItem button key={props.keyFun(item)}>
          {props.imgFun && (
            <Avatar>
              <img src={props.imgFun(item)} alt={props.primaryFun(item)} />
            </Avatar>
          )}
          <ListItemText
            primary={props.primaryFun(item)}
            secondary={props.secondaryFun && props.secondaryFun(item)}
          />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="edit"
              onClick={() => props.openEditDialog(item)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => props.openDeleteDialog(item)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </MUIList>
  );
}
