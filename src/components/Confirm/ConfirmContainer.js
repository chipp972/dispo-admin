// @flow
import { connect } from 'react-redux';
import { closeDialog } from '../../store/adminui/adminui.action';
import { Confirm } from './Confirm';

const mapStateToProps = (state, ownProps) => ({
  title: 'ATTENTION',
  contentText: 'Etes-vous sur de vouloir supprimer ?',
  isDialogOpen: state.adminui.currentOpenDialog === 'confirm'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  confirmAction: () => dispatch(ownProps.confirmAction()),
  closeDialog: () => dispatch(closeDialog())
});

export const ConfirmContainer = connect(mapStateToProps, mapDispatchToProps)(
  Confirm
);
