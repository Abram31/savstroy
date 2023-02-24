import React from 'react'
import { Admin, Resource } from 'react-admin';
import restProvider from "ra-data-simple-rest";
import { JobList } from './JobList';
import { JobCreate } from './JobCreate';
import { JobEdite } from './JobEdite';
import { authProvider } from './authProvider';
import { BASE_PATH_API } from '../../constants/constants';


export const AdminComp = () => {
  return (
    <Admin dataProvider={restProvider(BASE_PATH_API)} authProvider={authProvider}>
      <Resource name='jobs' list={JobList}
        create={JobCreate} edit={JobEdite}
      />
    </Admin >
  )
}
