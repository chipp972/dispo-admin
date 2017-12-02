// @flow
import React from 'react';
import BuisinessIcon from 'material-ui-icons/Business';
import WorkIcon from 'material-ui-icons/Work';
import FaceIcon from 'material-ui-icons/Face';
import { DispoTabs } from '../../components/Tabs/Tabs';
// import CompanyForm from './CompanyForm';
// import CompanyTypeForm from './CompanyTypeForm';
import { UserTab } from '../User/UserTab';

export const AdminMenu = () => (
  <DispoTabs
    tabs={[
      { key: 'tab0', icon: <FaceIcon />, label: 'UTILISATEURS', Content: UserTab },
      {
        key: 'tab1',
        icon: <WorkIcon />,
        label: `TYPE D'ENTREPRISE`,
        Content: <div>COMPANY TYPE</div>
      },
      {
        key: 'tab2',
        icon: <BuisinessIcon />,
        label: 'ENTREPRISE',
        Content: <div>COMPANY</div>
      }
    ]}
  />
);
