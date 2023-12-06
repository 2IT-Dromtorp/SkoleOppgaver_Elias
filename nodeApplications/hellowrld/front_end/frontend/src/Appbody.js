
import React from 'react';

const AppBody = ({ activeButton }) => {
    const [activeButton, setActiveButton] = useState(null);
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
