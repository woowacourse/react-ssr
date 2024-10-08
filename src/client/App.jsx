import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MovieList from './components/MovieList.jsx';

function App({ movieList }) {
  return (
    <>
      <Header movie={movieList[0]} />
      <MovieList movieList={movieList} />
      <Footer />
    </>
  );
}

export default App;
