// @flow
import type { Company, User, CompanyType } from 'dispo-api';
import R from 'ramda';

export type APIDataState = {
  companies: Company[],
  companyTypes: CompanyType[],
  users: User[],
  companyById: { [id: string]: Company },
  companyTypeById: { [id: string]: CompanyType },
  userById: { [id: string]: User }
};

const initialState: APIDataState = {
  companies: [],
  companyTypes: [],
  users: [],
  companyById: {},
  companyTypeById: {},
  userById: {}
};

const companyByIdLens = R.lens(R.prop('companyById'), R.assoc('companyById'));
const companyTypeByIdLens = R.lens(
  R.prop('companyTypeById'),
  R.assoc('companyTypeById')
);
const userByIdLens = R.lens(R.prop('userById'), R.assoc('userById'));

const filterById = (obj) => R.filter(R.not(R.where({ _id: obj._id })));
const addAllInMap = (objArr, objMap) =>
  R.map((obj) => R.assoc(obj._id, obj, objMap))(objArr);

export const apiDataReducer = (state: APIDataState = initialState, action) => {
  switch (action.type) {
    case 'GETALL_USER_SUCCESS':
      return {
        ...state,
        users: action.payload,
        userById: addAllInMap(action.payload, state.userById)
      };
    case 'GET_USER_SUCCESS':
    case 'CREATE_USER_SUCCESS':
    case 'EDIT_USER_SUCCESS':
      const user = action.payload;
      return {
        ...state,
        ...R.set(userByIdLens, { [user.id]: user }, state),
        users: R.append(user, state.users)
      };
    case 'REMOVE_USER_SUCCESS':
      const user = action.payload;
      const filterByUserId = filterById(user);
      return R.dissoc(user.id, {
        ...state,
        users: filterByUserId(state.users)
      });
    default:
      return state;
  }
};
