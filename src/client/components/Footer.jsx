import React from 'react';
import woowacourseLogo from '@images/woowacourse_logo.png';

export default function Footer() {
  return (
    <footer className='footer'>
      <p>&copy; 우아한테크코스 All Rights Reserved.</p>
      <p>
        <img src={woowacourseLogo} width='180' />
      </p>
    </footer>
  );
}
