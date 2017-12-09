// @flow
import { filter, compose, append, reduce, curry, not, propEq } from 'ramda';
import type { APIDataState } from './api.js.flow';

const filterOutById = curry((obj: any, objList: any[]) =>
  filter(not(propEq('_id', obj._id)))(objList)
);

export const addToState = (
  obj: { _id: string, [string]: any },
  modelName: string,
  state: APIDataState
) => ({
  ...state,
  [modelName]: {
    list: compose(append(obj), filterOutById(obj))(state[modelName].list),
    byId: {
      ...state[modelName].byId,
      [obj._id]: obj
    }
  },
  hasError: false
});

export const convertToMap = reduce(
  (obj, acc) => ({ ...acc, [obj._id]: obj }),
  {}
);

/**
 * delete the object from the state
 * @param {any} obj CRUD object
 * @param {string} modelName
 * @param {APIDataState} state
 * @return {APIDataState}
 */
export const removeFromState = (
  obj: { _id: string, [string]: any },
  modelName: string,
  state: APIDataState
) => ({
  ...state,
  [modelName]: {
    list: filterOutById(obj)(state[modelName].list),
    byId: {
      ...state[modelName].byId,
      [obj._id]: undefined
    }
  },
  hasError: false
});
