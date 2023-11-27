import React from 'react';
 
const Popup = ({ onClose, content }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        {content}
      </div>
    </div>
  );
};
 
export default Popup;
 