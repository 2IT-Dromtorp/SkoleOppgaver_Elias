import './App.css';
import NavBar from './navbar';
import AppBody from './Appbody';
import { useState } from 'react';


const App = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div>
      <NavBar activeButton={activeButton} handleButtonClick={handleButtonClick} />

      <AppBody activeButton={activeButton} />
    </div>
  );
};

export default App;


