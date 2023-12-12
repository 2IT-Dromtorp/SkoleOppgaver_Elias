import './App.css';
import NavBar from './navbar';
import AppBody from './Appbody';
import { useState } from 'react';
import { ActiveButtonProvider } from './activeButtonContext';

const App = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div>
    <ActiveButtonProvider>
    <NavBar activeButton={activeButton} handleButtonClick={handleButtonClick} />
      <AppBody activeButton={activeButton} />
      </ActiveButtonProvider>
    </div>
  );
};

export default App;


