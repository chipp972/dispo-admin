// @flow
import io from 'socket.io-client';
import { Store } from 'redux';
//import { EVENTS } from 'dispo-api';
import { forEachObjIndexed } from 'ramda';
import env from '../../env';

const crudEvents = (modelName: string) => ({
  created: `CREATE_${modelName}`,
  read: `READ_${modelName}`,
  updated: `EDIT_${modelName}`,
  deleted: `REMOVE_${modelName}`
});

const EVENTS = {
  USER: crudEvents('USER'),
  COMPANY: crudEvents('COMPANY'),
  COMPANY_TYPE: crudEvents('COMPANYTYPE'),
  COMPANY_POPULARITY: crudEvents('COMPANYPOPULARITY')
};

export const handleWebsocketEvents = (appStore: Store, token: string) => {
  const socket = io.connect(env.api.url);
  console.log(socket);

  socket.on('connect', () =>
    appStore.dispatch({
      type: 'WEBSOCKET_CONNECTED'
    })
  );

  socket.on('disconnect', () =>
    appStore.dispatch({
      type: 'WEBSOCKET_DISCONNECTED'
    })
  );

  const dispatchWebsocketEvent = (event, key) => {
    socket.on(event, (payload: any) =>
      appStore.dispatch({
        type: `${event}_SUCCESS`,
        payload
      })
    );
  };

  forEachObjIndexed(dispatchWebsocketEvent, EVENTS.USER);
  forEachObjIndexed(dispatchWebsocketEvent, EVENTS.COMPANY);
  forEachObjIndexed(dispatchWebsocketEvent, EVENTS.COMPANY_TYPE);
  forEachObjIndexed(dispatchWebsocketEvent, EVENTS.COMPANY_POPULARITY);
};
