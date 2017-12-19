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

type ListProps<T> = {
  itemList: T[],
  keyFun: (item: T) => string,
  imgFun?: (item: T) => string,
  primaryFun: (item: T) => string,
  secondaryFun?: (item: T) => string,
  dialogId: string,

  // store properties
  openEditDialog: (item: T) => any,
  openConfirmDialog: (item: T) => any
};

export function List<T>(props: ListProps<T>) {
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
            <IconButton aria-label="edit" onClick={() => props.openEditDialog(props.dialogId, item)}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => props.openConfirmDialog()}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </MUIList>
  );
}
