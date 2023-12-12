import React from 'react';
import { useActiveButtonContext } from './activeButtonContext';

const AppBody = () => {
  const { 0: activeButton } = useActiveButtonContext();

  console.log('activeButton:', activeButton);

  return (
    <div>
      {activeButton && (
        <div>
          <h2>{activeButton.label}</h2>
          {activeButton.content}
        </div>
      )}
    </div>
  );
};

export default AppBody;
