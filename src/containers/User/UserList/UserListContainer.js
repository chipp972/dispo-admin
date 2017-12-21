// @flow
import { connect } from 'react-redux';
import { List } from '../../../components/List/List';
import { openDialog } from '../../../store/adminui/adminui.action';
import { DIALOG_ID } from '../../../store/adminui/adminui.constant';

const mapStateToProps = (state, ownProps) => ({
  itemList: state.apidata.user.list,
  keyFun: item => item._id,
  primaryFun: item => item.email,
  secondaryFun: item => `${item.firstName} ${item.lastName}`
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openEditDialog: (dialogContent: any) =>
    dispatch(openDialog({ dialogId: DIALOG_ID.update, dialogContent })),
  openDeleteDialog: (dialogContent: any) =>
    dispatch(openDialog({ dialogId: DIALOG_ID.delete, dialogContent }))
});

export const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(
  List
);
