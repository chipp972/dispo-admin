// @flow
import io from 'socket.io-client';
import { Store } from 'redux';
//import { EVENTS } from 'dispo-api';
import env from '../../env';

const EVENTS = {
  COMPANY: {
    created: 'COMPANY_CREATED',
    updated: 'COMPANY_UPDATED',
    deleted: 'COMPANY_DELETED',
    clicked: 'COMPANY_CLICKED',
    create: 'COMPANY_CREATE',
    edit: 'COMPANY_EDIT',
    remove: 'COMPANY_REMOVE'
  }
};

export const handleWebsocketEvents = (appStore: Store, token: string) => {
  const socket = io(env.api.websocketUrl);

  socket.on(EVENTS.COMPANY.create, company => {
    appStore.dispatch({
      type: 'CREATE_COMPANY_SUCCESS',
      payload: company
    });
  });
  socket.on(EVENTS.COMPANY.edit, company => {
    appStore.dispatch({
      type: 'EDIT_COMPANY_SUCCESS',
      payload: company
    });
  });
  socket.on(EVENTS.COMPANY.remove, company => {
    appStore.dispatch({
      type: 'REMOVE_COMPANY_SUCCESS',
      payload: company
    });
  });

  socket.on(EVENTS.COMPANY.created, company => {
    console.log('create company event');
    appStore.dispatch({
      type: 'CREATE_COMPANY_SUCCESS',
      payload: company
    });
  });
  socket.on(EVENTS.COMPANY.updated, company => {
    console.log('update company event');
    appStore.dispatch({
      type: 'EDIT_COMPANY_SUCCESS',
      payload: company
    });
  });
  socket.on(EVENTS.COMPANY.deleted, company => {
    appStore.dispatch({
      type: 'REMOVE_COMPANY_SUCCESS',
      payload: company
    });
  });
  socket.on(
    EVENTS.COMPANY.clicked,
    (companyPopularity: { companyId: string, userId: string }) => {
      appStore.dispatch({
        type: 'COMPANY_CLICKED_SUCCESS',
        payload: companyPopularity
      });
    }
  );
};
