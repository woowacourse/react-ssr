import React from 'react';
import Header from '../components/Header';
import MovieList from '../components/MovieList';

export default function MainPage({movies}) {
  return (
    <>
      <Header movies={movies} />
      <div className="container">
        <MovieList movies={movies} />
      </div>
    </>
  );
}
