import './App.scss';
import { Main } from './components/Main/Main';
import { Routes, Route } from "react-router-dom";
import { routes } from './routes/routes';
import { Services } from './components/Services/Services';
import { About } from './components/About/About';
import { Jobs } from './components/Jobs/Jobs';
import { Objects } from './components/Objects/Objects';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path={routes.services.path} element={<Services />} />
      <Route path={routes.works.path} element={<Objects />} />
      <Route path={routes.jobs.path} element={<Jobs />} />
      <Route path={routes.about.path} element={<About />} />

    </Routes>
  )

}

export default App;
