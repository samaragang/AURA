import React from 'react';
import './custom-button.css';

const CustomButton = ({ onClick, children, className = '', type = 'button' }) => {
  return (
    <button onClick={onClick} type={type} className={`custom-button ${className}`}>
      {children}
    </button>
  );
};

export default CustomButton;
