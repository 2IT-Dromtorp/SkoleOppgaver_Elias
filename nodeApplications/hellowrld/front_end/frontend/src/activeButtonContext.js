import { createContext, useContext, useState } from 'react';

const ActiveButtonContext = createContext();

export const useActiveButtonContext = () => {
  return useContext(ActiveButtonContext);
};

export const ActiveButtonProvider = ({ children }) => {
  const [activeButton, setActiveButton] = useState(null);

  const setButton = (button) => {
    setActiveButton(button);
  };

  return (
    <ActiveButtonContext.Provider value={[ activeButton, setButton ]}>
      {children}
    </ActiveButtonContext.Provider>
  );
};
