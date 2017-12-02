// @flow
import { dataAPI } from 'dispo-api';
import env from '../env';
import type { Company, CompanyType, User } from 'dispo-api';
import type { Dispatch } from 'redux';
import R from 'ramda';

const fetcher = dataAPI(fetch, env.api.url);

const generateCrudAction = (operation: string, dataName: string) => {
  return (...data: any) => async (dispatch: Dispatch, getState: () => any) => {
    try {
      const { authentication } = getState();
      const { token } = authentication;
      const res = await fetcher(token)[dataName][operation](...data);
      dispatch({
        type: `${operation.toUpperCase()}_${dataName.toUpperCase()}_SUCCESS`,
        payload: res
      });
    } catch (error) {
      dispatch({
        type: `${operation.toUpperCase()}_${dataName.toUpperCase()}_FAILURE`,
        error
      });
    }
  };
};

// const dataNameList = ['company', 'companyType', 'user'];
// const operationList = ['getAll', 'get', 'create', 'edit', 'remove'];
// const f1 = (arr1, arr2) => R.map((obj) => R.repeat(obj, R.length(arr1)))(arr2);
// const tmp = R.map(R.zip(operationList))(f1(operationList, dataNameList));
// const crud = R.map(R.map(((args) => generateCrudAction(...args))))(tmp);

export const crud = {
  company: {
    getAll: generateCrudAction('getAll', 'company'),
    get: generateCrudAction('get', 'company'),
    create: generateCrudAction('create', 'company'),
    edit: generateCrudAction('edit', 'company'),
    remove: generateCrudAction('remove', 'company'),
  },
  companyType: {
    getAll: generateCrudAction('getAll', 'companyType'),
    get: generateCrudAction('get', 'companyType'),
    create: generateCrudAction('create', 'companyType'),
    edit: generateCrudAction('edit', 'companyType'),
    remove: generateCrudAction('remove', 'companyType'),
  },
  user: {
    getAll: generateCrudAction('getAll', 'user'),
    get: generateCrudAction('get', 'user'),
    create: generateCrudAction('create', 'user'),
    edit: generateCrudAction('edit', 'user'),
    remove: generateCrudAction('remove', 'user'),
  },
};

// function crudAction(dataName: 'company' | 'companyType' | 'user') {
//   getAll: () => async (dispatch: Dispatch, getState) => {
//     try {
//       const { authentication } = getState();
//       const { token } = authentication;
//       const res = await fetcher(token)[dataName].getAll();
//       dispatch({
//         type: `GET_ALL_${dataName.toUpperCase()}_SUCCESS`,
//         payload: res
//       });
//     } catch (error) {
//       dispatch({
//         type: `GET_ALL_${dataName.toUpperCase()}_FAILURE`,
//         error
//       });
//     }
//   };
// }
