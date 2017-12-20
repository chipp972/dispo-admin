// @flow
import { connect } from 'react-redux';
import { List } from '../../../components/List/List';
import { openDialog } from '../../../store/adminui/adminui.action';
import { DIALOG_ID } from '../../../store/adminui/adminui.constant';

const mapStateToProps = (state, ownProps) => ({
  itemList: state.apidata.company.list,
  keyFun: item => item._id,
  imgFun: item => item.imageUrl,
  primaryFun: item => item.name,
  secondaryFun: item => item.address
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openEditDialog: (dialogContent: any) =>
    dispatch(openDialog({ dialogId: DIALOG_ID.update, dialogContent })),
  openDeleteDialog: (dialogContent: any) =>
    dispatch(openDialog({ dialogId: DIALOG_ID.delete, dialogContent }))
});

export const CompanyListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
