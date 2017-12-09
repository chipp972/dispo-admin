// @flow
import { addToState, convertToMap, removeFromState } from './api.helper';
import type { APIDataState } from './api.js.flow';
import { append, drop } from 'ramda';

const initialState: APIDataState = {
  company: { list: [], byId: {} },
  companytype: { list: [], byId: {} },
  user: { list: [], byId: {} },
  errorList: []
};

export const apiDataReducer = (
  state: APIDataState = initialState,
  action: any
) => {
  if (action.type === 'HIDE_ERROR_MESSAGE') {
    return {
      ...state,
      errorList: drop(1, state.errorList)
    };
  }
  const re = /([A-Z]+)_([A-Z]+)_([A-Z]+)/.exec(action.type);
  if (!re || re.length < 4) return state;
  const [, actionType, modelName, status] = re;
  const name = modelName.toLowerCase();
  if (status === 'FAILURE') {
    return {
      ...state,
      errorList: append(action.error.message, state.errorList)
    };
  }
  switch (actionType) {
    case 'GETALL':
      return {
        ...state,
        [name]: {
          list: action.payload,
          byId: convertToMap(action.payload)
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
