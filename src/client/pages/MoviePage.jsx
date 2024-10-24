import React from 'react';
import Header from '../components/Header.jsx';
import MovieList from '../components/MovieList.jsx';
import Footer from '../components/Footer.jsx';

const MoviePage = ({ movies }) => {
  return (
    <>
      <Header bestMovie={movies[0]} />
      <MovieList movies={movies} />
      <Footer />
    </>
  );
};

export default MoviePage;
