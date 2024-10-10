import React from 'react';
import WoowacourseLogoImage from '@images/woowacourse_logo.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>&copy; 우아한테크코스 All Rights Reserved.</p>
      <p>
        <img src={WoowacourseLogoImage} width='180' />
      </p>
    </footer>
  );
};

export default Footer;
