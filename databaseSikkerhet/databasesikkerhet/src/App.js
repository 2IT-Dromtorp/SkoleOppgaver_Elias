import './App.css';
import Login from './loginside';
import RegisterSide from './registerside';
import LoggedIn from './loggedIn';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import LaererDisplay from './laererDisplay';
import PendingItemsPage from './pending';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Outlet/>}>
        <Route index element={<Login/>}/>
        <Route path="register" element={<RegisterSide/>}/>
        <Route path="loggedIn" element={<LoggedIn/>}/>
        <Route path="*" element={<h1>404</h1>}/>
        <Route path="laerer" element={<LaererDisplay/>}/>
        <Route path="pending" element={<PendingItemsPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
