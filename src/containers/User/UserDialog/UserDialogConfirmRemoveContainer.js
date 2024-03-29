// @flow
import { connect } from 'react-redux';
import { Confirm } from '../../../components/Confirm/Confirm';
import { crud } from '../../../store/apidata/api.action';
import { closeDialog } from '../../../store/adminui/adminui.action';
import type { User } from 'dispo-api';
import { DIALOG_ID, TAB_ID } from '../../../store/adminui/adminui.constant';

const mapStateToProps = (state, ownProps) => ({
  title: 'ATTENTION',
  contentText: `Êtes-vous sûr de vouloir supprimer cet utilisateur ?
  Les entreprises de cet utilisateur seront aussi supprimées !`,
  dialogContent: state.adminui.dialogContent,
  isDialogOpen:
    state.adminui.currentOpenDialog === DIALOG_ID.delete &&
    state.adminui.currentTabId === TAB_ID.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  confirmAction: (item: User) => dispatch(crud.user.remove(item)),
  closeDialog: () => dispatch(closeDialog())
});

export const UserDialogConfirmRemoveContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Confirm);
