import React, { useState } from 'react';
import ButtonNavbar from './ButtonNavbar';
import Button1Content from './Button1Content';
import Button2Content from './Button2Content';
import Button3Content from './Button3Content';
import Button4Content from './Button4Content';

const NavBar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const buttons1 = [
    { label: 'Button 1', content: <Button1Content /> },
  ];

  const buttons2 = [
    { label: 'Button 2', content: <Button2Content /> },
  ];

  const buttons3 = [
    { label: 'Button 3', content: <Button3Content /> },
  ];

  const buttons4 = [
    { label: 'Button 4', content: <Button4Content /> },
  ];

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="navbar">
      <div className='navbar-knapper'>
        <ButtonNavbar buttons={buttons1} onButtonClick={handleButtonClick} />
      </div>
      <div className='navbar-knapper'>
        <ButtonNavbar buttons={buttons2} onButtonClick={handleButtonClick} />
      </div>
      <div className='navbar-knapper'>
        <ButtonNavbar buttons={buttons3} onButtonClick={handleButtonClick} />
      </div>
      <div className='navbar-knapper'>
        <ButtonNavbar buttons={buttons4} onButtonClick={handleButtonClick} />
        {activeButton && (
          <div>
            <h2>{activeButton.label}</h2>
            {activeButton.content}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
