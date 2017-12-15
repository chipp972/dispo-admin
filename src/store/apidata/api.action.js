// @flow
import { dataAPI } from 'dispo-api';
import env from '../../env';
import type {
  CrudOperations,
  Company,
  CompanyData,
  CompanyType,
  CompanyTypeData,
  User,
  UserData
} from 'dispo-api';
import type { Dispatch } from 'redux';
import type { APIDataState } from './api.js.flow';

const fetcher = dataAPI(fetch, env.api.url);

const generateCrudAction = (operation: string, dataName: string) => {
  return (...data: any) => async (dispatch: Dispatch, getState: () => any) => {
    try {
      const { authentication } = getState();
      const { token } = authentication;
      console.log(data);
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

export type CrudAPI = {
  company: CrudOperations<CompanyData, Company>,
  companyType: CrudOperations<CompanyTypeData, CompanyType>,
  user: CrudOperations<UserData, User>
};

export const crud: CrudAPI = {
  company: {
    getAll: generateCrudAction('getAll', 'company'),
    get: generateCrudAction('get', 'company'),
    create: generateCrudAction('create', 'company'),
    edit: generateCrudAction('edit', 'company'),
    remove: generateCrudAction('remove', 'company')
  },
  companyType: {
    getAll: generateCrudAction('getAll', 'companyType'),
    get: generateCrudAction('get', 'companyType'),
    create: generateCrudAction('create', 'companyType'),
    edit: generateCrudAction('edit', 'companyType'),
    remove: generateCrudAction('remove', 'companyType')
  },
  user: {
    getAll: generateCrudAction('getAll', 'user'),
    get: generateCrudAction('get', 'user'),
    create: generateCrudAction('create', 'user'),
    edit: generateCrudAction('edit', 'user'),
    remove: generateCrudAction('remove', 'user')
  }
};

export const hideError = () => ({
  type: 'HIDE_ERROR_MESSAGE'
});
