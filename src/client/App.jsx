import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';

function App({ movies }) {
  return (
    <>
      <Header bestMovie={movies[0]} />
      <MovieList movies={movies} />
      <Footer />
    </>
  );
}

export default App;
