// @flow
import { connect } from 'react-redux';
import { Confirm } from '../../../components/Confirm/Confirm';
import { crud } from '../../../store/apidata/api.action';
import { closeDialog } from '../../../store/adminui/adminui.action';
import type { CompanyType } from 'dispo-api';
import { DIALOG_ID, TAB_ID } from '../../../store/adminui/adminui.constant';

const mapStateToProps = (state, ownProps) => ({
  title: 'ATTENTION',
  contentText: `Êtes-vous sûr de vouloir supprimer ce type d'entreprise ?
  Les entreprises qui utilisent ce type seront supprimées !`,
  dialogContent: state.adminui.dialogContent,
  isDialogOpen:
    state.adminui.currentOpenDialog === DIALOG_ID.delete &&
    state.adminui.currentTabId === TAB_ID.companyType
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  confirmAction: (item: CompanyType) =>
    dispatch(crud.companyType.remove(item)),
  closeDialog: () => dispatch(closeDialog())
});

export const CompanyTypeDialogConfirmRemoveContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Confirm);
