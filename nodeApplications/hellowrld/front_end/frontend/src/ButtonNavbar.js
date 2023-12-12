import React from 'react';
import { useActiveButtonContext } from './activeButtonContext';
import Button1Content from './Button1Content';
import Button2Content from './Button2Content';
import Button3Content from './Button3Content';
import Button4Content from './Button4Content';

const ButtonNavbar = () => {
  const { 1: setButton } = useActiveButtonContext();

  const buttons = [
    { label: 'Button 1', content: <Button1Content /> },
    { label: 'Button 2', content: <Button2Content /> },
    { label: 'Button 3', content: <Button3Content /> },
    { label: 'Button 4', content: <Button4Content /> },
  ];

  return (
    <>
      {buttons.map((button, index) => (
        <div className='goofy_ah_container' key={index} onClick={() => setButton(button)}>
          {button.label}
        </div>
      ))}
    </>
  );
};

export default ButtonNavbar;
