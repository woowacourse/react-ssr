import React, { useEffect, useState } from 'react';

import MovieList from './components/MovieList.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function Layout({ movieList, children }) {
  return (
    <>
      <Header movie={movieList[0]} />
      <MovieList movieList={movieList} />
      <Footer />
      {children}
    </>
  );
}

export default Layout;
