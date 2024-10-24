import React from 'react';
import LogoImage from '@images/logo.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>&copy; 우아한테크코스 All Rights Reserved.</p>
      <p>
        <img src={LogoImage} width='180' />
      </p>
    </footer>
  );
};

export default Footer;
