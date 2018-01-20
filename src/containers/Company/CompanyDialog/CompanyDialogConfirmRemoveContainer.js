// @flow
import { connect } from 'react-redux';
import { Confirm } from '../../../components/Confirm/Confirm';
import { crud } from '../../../store/apidata/api.action';
import { closeDialog } from '../../../store/adminui/adminui.action';
import type { Company } from 'dispo-api';
import { DIALOG_ID, TAB_ID } from '../../../store/adminui/adminui.constant';

const mapStateToProps = (state, ownProps) => ({
  title: 'ATTENTION',
  contentText: `Etes-vous sur de vouloir supprimer cette entreprise ?`,
  dialogContent: state.adminui.dialogContent,
  isDialogOpen:
    state.adminui.currentOpenDialog === DIALOG_ID.delete &&
    state.adminui.currentTabId === TAB_ID.company
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  confirmAction: (item: Company) => dispatch(crud.company.remove(item)),
  closeDialog: () => dispatch(closeDialog())
});

export const CompanyDialogConfirmRemoveContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Confirm);
