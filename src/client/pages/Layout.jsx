import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

const Layout = ({ bestMovie }) => {
  return (
    <>
      <Header bestMovie={bestMovie} />
      <div className="container">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
