// @flow
import React from 'react';
import { Redirect } from 'react-router-dom';
import { AdminMenu } from '../AdminMenu/AdminMenu';

type AdminScreenProps = {
  isAuthenticated: boolean
};

export const AdminScreen = (props: AdminScreenProps) => {
  console.log(props);
  return props.isAuthenticated ? <AdminMenu /> : <Redirect to="/login" />;
};
