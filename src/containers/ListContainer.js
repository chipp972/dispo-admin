// @flow
import { connect } from 'react-redux';
import { List } from '../components/List/List';
import {
  openEditDialog,
  openRemoveDialog
} from '../store/adminui/adminui.action';
import type { DialogId } from '../store/adminui/adminui.js.flow';

const mapStateToProps = (state, ownProps) => ({
  itemList: ownProps.itemList,
  keyFun: ownProps.keyFun,
  imgFun: ownProps.imgFun,
  primaryFun: ownProps.primaryFun,
  secondaryFun: ownProps.secondaryFun
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openEditDialog: (dialogId: DialogId, dialogContent: any) =>
    dispatch(openEditDialog({ dialogId, dialogContent })),
  openRemoveDialog: item => dispatch(openRemoveDialog())
});

export const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);