import NavBar from './Navbar/NavBar.js';
import Body from './Body/Body.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='appBody'>
        <Body />
      </div>
    </div>
  );
}

export default App;
