import './App.scss';
import { Main } from './components/Main/Main';
import { Routes, Route } from "react-router-dom";
import { routes } from './routes/routes';
import { Services } from './components/Services/Services';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path={routes.services.path} element={<Services />} />
    </Routes>
  )

}

export default App;
