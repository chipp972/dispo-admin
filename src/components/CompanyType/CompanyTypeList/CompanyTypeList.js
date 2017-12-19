// @flow
import React from 'react';
import { ListContainer } from '../../../containers/ListContainer';
import type { CompanyType } from 'dispo-api';

type CompanyTypeListProps = {
  companytype: {
    list: CompanyType[],
    byId: { [id: string]: CompanyType }
  }
};

export const CompanyTypeList = (props: CompanyTypeListProps) => (
  <ListContainer
    dialogId="companyType"
    itemList={props.companytype.list}
    keyFun={(companytype: CompanyType) => companytype._id}
    primaryFun={(companytype: CompanyType) => companytype.name}
  />
);
