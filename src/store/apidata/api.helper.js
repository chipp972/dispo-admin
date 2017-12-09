// @flow
import { filter, compose, append, reduce, curry } from 'ramda';
import type { APIDataState } from './api.js.flow';

/**
 * filter objects by id
 */
export const filterOutById = curry((obj: any, objList: any[]) =>
  filter((o) => o._id !== obj._id)(objList)
);

/**
 * convert array to map with _id as keys
 */
export const convertToMap = reduce(
  (acc, obj) => ({ ...acc, [obj._id]: obj }),
  {}
);

/**
 * add an object in the state
 * @param {any} obj CRUD object
 * @param {string} modelName
 * @param {APIDataState} state
 * @return {APIDataState}
 */
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
});

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
    byId: filterOutById(obj)(state[modelName].byId)
  },
});
