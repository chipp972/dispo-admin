// @flow
import { connect } from 'react-redux';
import { CompanyTypeDialog } from './CompanyTypeDialog';
import { closeDialog } from '../../../store/adminui/adminui.action';

const mapStateToProps = (state, ownProps) => ({
  isDialogOpen: state.adminui.currentOpenDialog === 'companyType',
  isMobileViewport: state.adminui.isMobileViewport,
  dialogContent: state.adminui.dialogContent
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeDialog: () => dispatch(closeDialog())
});

export const CompanyTypeDialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyTypeDialog);
