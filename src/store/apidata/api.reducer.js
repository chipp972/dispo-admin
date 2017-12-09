// @flow
import { addToState, convertToMap, removeFromState } from './api.helper';
import type { APIDataState } from './api.js.flow';

const initialState: APIDataState = {
  company: { list: [], byId: {} },
  companytype: { list: [], byId: {} },
  user: { list: [], byId: {} },
  hasError: false
};

export const apiDataReducer = (
  state: APIDataState = initialState,
  action: any
) => {
  const re = /([A-Z]+)_([A-Z]+)_([A-Z]+)/.exec(action.type);
  if (!re || re.length < 4) return state;
  const [, actionType, modelName, isSuccess] = re;
  const name = modelName.toLowerCase();
  console.log(actionType, name, isSuccess);
  (actionType: 'GETALL' | 'GET' | 'CREATE' | 'EDIT' | 'REMOVE');
  if (!isSuccess) {
    return {
      ...state,
      hasError: true,
      error: action.error
    };
  }
  switch (actionType) {
    case 'GETALL':
      return {
        ...state,
        [name]: {
          list: action.payload,
          byId: convertToMap(action.payload)
        },
        hasError: false
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
