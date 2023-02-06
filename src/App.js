import './App.scss';
import { Main } from './components/Main/Main';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/message" element={<h1>Message</h1>} />
    </Routes>
  )

}

export default App;
