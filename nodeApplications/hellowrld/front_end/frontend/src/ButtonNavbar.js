import React from 'react';

const ButtonNavbar = ({ buttons, onButtonClick }) => {
  return (
    <div>
      {buttons.map((button, index) => (
        <div key={index} onClick={() => onButtonClick(button)}>
          {button.label}
        </div>
      ))}
    </div>
  );
};

export default ButtonNavbar;
