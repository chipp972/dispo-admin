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

const generateCrudModel = (dataName: string) => ({
    getAll: generateCrudAction('getAll', dataName),
    get: generateCrudAction('get', dataName),
    read: generateCrudAction('read', dataName),
    create: generateCrudAction('create', dataName),
    edit: generateCrudAction('edit', dataName),
    remove: generateCrudAction('remove', dataName),
});

export const crud: CrudAPI = {
  company: generateCrudModel('company'),
  companyType: generateCrudModel('companyType'),
  companyPopularity: generateCrudModel('companyPopularity'),
  user: generateCrudModel('user'),
};
