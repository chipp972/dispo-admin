// @flow
import { addToState, convertToMap, removeFromState } from './api.helper';
import type { APIDataState } from './api.js.flow';

const initialState: APIDataState = {
  company: { list: [], byId: {} },
  companytype: { list: [], byId: {} },
  user: { list: [], byId: {} },
  companyPopularity: { list: [], byId: {} }
};

export const apiDataReducer = (
  state: APIDataState = initialState,
  action: any
) => {
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
