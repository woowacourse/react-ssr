import React from 'react';
import MovieList from '../components/MovieList';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home({ movies }) {
  return (
    <>
      <Header movie={movies[0]} />
      <MovieList movies={movies} />
      <Footer />
    </>
  );
}

export default Home;
