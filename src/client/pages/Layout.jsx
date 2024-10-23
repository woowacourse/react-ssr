import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

const Layout = ({ bestMovie }) => {
  return (
    <>
      <Header bestMovie={bestMovie} />
      <Outlet />
    </>
  );
};

export default Layout;
