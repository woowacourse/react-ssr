import React from 'react';
import MovieList from './components/MovieList.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { TMDB_BANNER_URL } from '../api/constants.js';

function App({ movieList }) {
  const bestMovie = movieList[0];

  return (
    <>
      <Header
        rate={bestMovie.rate}
        title={bestMovie.title}
        backgroundContainer={`${TMDB_BANNER_URL}${bestMovie.backdrop_path}`}
      />
      <MovieList movieList={movieList} />
      <Footer />
    </>
  );
}

export default App;
