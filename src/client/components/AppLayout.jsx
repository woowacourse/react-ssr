import React from 'react';
import { Outlet } from 'react-router-dom';
import woowacourseLogo from '@images/woowacourse_logo.png';

import Header from './Header';

export default function AppLayout({ movies }) {
  return (
    <>
      <Header movie={movies[0]} />
      <div className="container">
        <Outlet />
      </div>
      <footer class="footer">
        <p>&copy; 우아한테크코스 All Rights Reserved.</p>
        <p>
          <img src={woowacourseLogo} width="180" />
        </p>
      </footer>
    </>
  );
}
