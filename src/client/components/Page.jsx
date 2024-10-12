import React from 'react';
import MovieList from './MovieList';

function HomePage({movies}) {
  return (
    <div className="container">
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
