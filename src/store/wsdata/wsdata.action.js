// @flow
import io from 'socket.io-client';
import { Store } from 'redux';
import env from '../../env';

export const handleWebsocketEvents = (appStore: Store) => {
  const socket = io.connect(env.api.url);

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

  const dispatchWebsocketEvent = (event: string, actionLabel: string) => {
    socket.on(event, (payload: any) =>
      appStore.dispatch({
        type: `${actionLabel}_SUCCESS`,
        payload
      })
    );
  };

  const toActionType = (model: string, operation: string): string => {
    const modelConverter = {
      user: 'USER',
      company: 'COMPANY',
      companyType: 'COMPANYTYPE',
      companyPopularity: 'COMPANYPOPULARITY'
    };
    const operationConverter = {
      created: 'CREATE',
      updated: 'EDIT',
      removed: 'REMOVE'
    };
    return `${operationConverter[operation]}_${modelConverter[model]}`;
  };

  ['user', 'company', 'companyType', 'companyPopularity'].forEach(
    (model: string) => {
      ['created', 'updated', 'removed'].forEach((operation: string) => {
        dispatchWebsocketEvent(
          `${model}:${operation}`,
          toActionType(model, operation)
        );
      });
    }
  );
};
