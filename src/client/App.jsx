import React from 'react';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
