import React from 'react'
import { Admin, Resource } from 'react-admin';
import restProvider from "ra-data-simple-rest";
import { JobList } from './JobList';
import { JobCreate } from './JobCreate';
import { JobEdite } from './JobEdite';
import { authProvider } from './authProvider';


export const AdminComp = () => {
  return (
      <Admin dataProvider={restProvider('http://localhost:3000')} authProvider={authProvider}>
          <Resource name='admin' list={JobList} create={JobCreate} edit={JobEdite} />
      </Admin >
  )
}
