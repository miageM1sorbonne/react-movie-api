import React from 'react';
import './Logo.css';
import logo from './standard-logo.png';

const Logo = ({ isSmall = false }) => {
  const imageSize = isSmall ? 'big' : 'standard';

  return (
    <div className={`logo ${imageSize}`}>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
