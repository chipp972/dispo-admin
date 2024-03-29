// @flow
import { addToState, convertToMap, removeFromState } from './api.helper';
import type { APIDataState } from './api.js.flow';

const initialState: APIDataState = {
  isWebsocketInitialised: false,
  company: { list: [], byId: {} },
  companytype: { list: [], byId: {} },
  user: { list: [], byId: {} },
  companypopularity: { list: [], byId: {} }
};

export const apiDataReducer = (
  state: APIDataState = initialState,
  action: any
) => {
  if (action.type === 'WEBSOCKET_CONNECTED') {
    return { ...state, isWebsocketReady: true };
  } else if (action.type === 'WEBSOCKET_DISCONNECTED') {
    return { ...state, isWebsocketReady: false };
  }
  const re = /([A-Z]+)_([A-Z]+)_([A-Z]+)/.exec(action.type);
  if (!re || re.length < 4) return state;
  const [, actionType, modelName, status] = re;
  if (status === 'FAILURE' || status === 'PENDING') return state;
  const name = modelName.toLowerCase();
  switch (actionType) {
    case 'GETALL':
      return {
        ...state,
        [name]: {
          list: action.payload,
          byId: convertToMap(action.payload || [])
        }
      };
    case 'GET':
    case 'CREATE':
    case 'EDIT':
      return addToState(action.payload, name, state);
    case 'REMOVE':
      return removeFromState(action.payload, name, state);
    default:
      return state;
  }
};
