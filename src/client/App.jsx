import React from 'react';
import { TMDB_BANNER_URL } from '../api/constants.js';
import MovieList from './components/MovieList.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function App({ movieList }) {
  if (!movieList || movieList.length === 0) {
    return <div>Loading...</div>;
  }

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
