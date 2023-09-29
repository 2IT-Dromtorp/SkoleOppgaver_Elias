import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Profile from './Profile';
import Home from './home';

function App() {

  return (


       <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/:profile/:id" Component={Profile} />
       </Routes>


        

  );
}

export default App;
