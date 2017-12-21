// @flow
import { connect } from 'react-redux';
import { Dialog } from '../../../components/Dialog/Dialog';
import { closeDialog } from '../../../store/adminui/adminui.action';
import { CompanyTypeFormContainer } from '../CompanyTypeForm/CompanyTypeFormContainer';
import { DIALOG_ID, TAB_ID } from '../../../store/adminui/adminui.constant';

const mapStateToProps = (state, ownProps) => ({
  isMobileViewport: state.adminui.isMobileViewport,
  title: "TYPE d'ENTREPRISE",
  Content: CompanyTypeFormContainer,
  isDialogOpen:
    (state.adminui.currentOpenDialog === DIALOG_ID.create ||
      state.adminui.currentOpenDialog === DIALOG_ID.update) &&
    state.adminui.currentTabId === TAB_ID.companyType
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeDialog: () => dispatch(closeDialog())
});

export const CompanyTypeDialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialog);
