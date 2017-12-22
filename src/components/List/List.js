// @flow
import React from 'react';
import {
  List as MUIList,
  ListItem,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  ListItemAvatar,
  IconButton
} from 'material-ui';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import { compose, slice, append } from 'ramda';

type ListProps = {
  isMobileViewport: boolean,
  itemList: any[],
  keyFun: (item: any) => string,
  imgFun?: (item: any) => string,
  primaryFun: (item: any) => string,
  secondaryFun?: (item: any) => string,
  openEditDialog: (item: any) => any,
  openDeleteDialog: (item: any) => any
};

const MAX_LENGTH = 25;

const shorten = (str: string) =>
  str.length > MAX_LENGTH
    ? compose(append('...'), slice(0, MAX_LENGTH))(str)
    : str;

export function List(props: ListProps) {
  return (
    <MUIList style={{ flex: 1 }}>
      {props.itemList.map(item => (
        <ListItem
          button
          disableGutters
          divider
          key={props.keyFun(item)}
          onClick={() => props.openEditDialog(item)}
        >
          {props.imgFun && (
            <ListItemAvatar>
              <Avatar src={props.imgFun(item)} alt={props.primaryFun(item)} />
            </ListItemAvatar>
          )}
          <ListItemText
            syle={{ flex: 1 }}
            primary={
              !props.isMobileViewport
                ? props.primaryFun(item)
                : shorten(props.primaryFun(item))
            }
            secondary={
              !props.isMobileViewport &&
              props.secondaryFun &&
              props.secondaryFun(item)
            }
          />
          <ListItemSecondaryAction style={{ flex: 0 }}>
            {!props.isMobileViewport && (
              <IconButton
                aria-label="edit"
                onClick={() => props.openEditDialog(item)}
              >
                <EditIcon />
              </IconButton>
            )}
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
