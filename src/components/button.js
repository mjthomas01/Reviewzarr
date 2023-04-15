import React from 'react';
import "./button.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const DarkButton = () => {
  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = '#333';
  };
 
  return (
    <button className='dark-button'
      style={{
        backgroundColor: '#2B2B2B',
        color: '#fff',
        padding: '8px 16px',
        borderRadius: '30px',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
      }}
      onMouseOver={handleMouseOver}
      
    >
      <span style={{ marginRight: '8px' }}>Get Started</span>
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );
};

export default DarkButton;
