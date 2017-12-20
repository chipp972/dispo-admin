// @flow
import { connect } from 'react-redux';
import { List } from '../../../components/List/List';
import { openDialog } from '../../../store/adminui/adminui.action';
import { DIALOG_ID } from '../../../store/adminui/adminui.constant';

const mapStateToProps = (state, ownProps) => ({
  itemList: state.apidata.companytype.list,
  keyFun: item => item._id,
  primaryFun: item => item.name
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openEditDialog: dialogContent =>
    dispatch(openDialog({ dialogId: DIALOG_ID.update, dialogContent })),
  openDeleteDialog: dialogContent =>
    dispatch(openDialog({ dialogId: DIALOG_ID.delete, dialogContent }))
});

export const CompanyTypeListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
