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
  UserData,
  CompanyPopularity,
  CompanyPopularityData
} from 'dispo-api';
import type { Dispatch } from 'redux';

const fetcher = dataAPI(fetch, env.api.url);

const generateCrudAction = (operation: string, dataName: string) => {
  return (data: any) => async (dispatch: Dispatch, getState: () => any) => {
    try {
      const { authentication, apidata } = getState();
      const { token } = authentication;
      const { isWebsocketReady } = apidata;
      const payload =
        operation === 'edit' || operation === 'remove'
          ? await fetcher(token)[dataName][operation](data._id, data)
          : await fetcher(token)[dataName][operation](data);
      // if websocket is not initialised we use the ajax response
      if (!isWebsocketReady) {
        dispatch({
          type: `${operation.toUpperCase()}_${dataName.toUpperCase()}_SUCCESS`,
          payload
        });
      }
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
  user: CrudOperations<UserData, User>,
  companyPopularity: CrudOperations<CompanyPopularityData, CompanyPopularity>
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
  companyPopularity: {
    getAll: generateCrudAction('getAll', 'companyPopularity'),
    get: generateCrudAction('get', 'companyPopularity'),
    create: generateCrudAction('create', 'companyPopularity'),
    edit: generateCrudAction('edit', 'companyPopularity'),
    remove: generateCrudAction('remove', 'companyPopularity')
  },
  user: {
    getAll: generateCrudAction('getAll', 'user'),
    get: generateCrudAction('get', 'user'),
    create: generateCrudAction('create', 'user'),
    edit: generateCrudAction('edit', 'user'),
    remove: generateCrudAction('remove', 'user')
  }
};
