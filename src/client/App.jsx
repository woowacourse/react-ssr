import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App({ movies }) {
  return (
    <>
      <Header bannerMovie={movies[0]} />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
