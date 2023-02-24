import './App.scss';
import { Admin, Resource } from 'react-admin';
import restProvider from "ra-data-simple-rest";

import { Main } from './components/Main/Main';
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import { routes } from './routes/routes';
import { Services } from './components/Services/Services';
import { About } from './components/About/About';
import { Jobs } from './components/Jobs/Jobs';
import { Objects } from './components/Objects/Objects';
import { AdminComp } from './components/Admin/Admin';
import { JobList } from './components/Admin/JobList';
import { JobCreate } from './components/Admin/JobCreate';
import { JobEdite } from './components/Admin/JobEdite';
import { authProvider } from './components/Admin/authProvider';
import React from 'react';




function App() {
  const { pathname } = window.location
  const isAdmin = pathname === '/admin'

  return (<>
    {isAdmin ?
      // <BrowserRouter
      // basename={process.env.PUBLIC_URL}
      // >
        // <React.StrictMode>
          <AdminComp />
        // </React.StrictMode>
      /* </BrowserRouter> */
      :
      <BrowserRouter 
      // basename={process.env.PUBLIC_URL}
      >
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<Main />} />
            {/* <Route path='/admin/*' element={<AdminComp />} /> */}
            <Route path={routes.services.path} element={<Services />} />
            <Route path={routes.works.path} element={<Objects />} />
            <Route path={routes.jobs.path} element={<Jobs />} />
            <Route path={routes.about.path} element={<About />} />
          </Routes>
        </React.StrictMode>
      </BrowserRouter>
    }

  </>
  )
}

//   )

// }

export default App;
