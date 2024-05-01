import './App.css';
import Login from './loginside';
import RegisterSide from './registerside';
import LoggedIn from './loggedIn';
import DataTable from './utlaanTabell';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Outlet/>}>
        <Route index element={<Login/>}/>
        <Route path="register" element={<RegisterSide/>}/>
        <Route path="loggedIn" element={<LoggedIn/>}/>
        <Route path="utlaanTabell" element={<DataTable/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
