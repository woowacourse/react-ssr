import React from 'react';
import Tab from './Tab';
import MovieList from './MovieList';

function HomePage({movies}) {
  return (
    <div class="container">
      <Tab currentPath={'now_playing'} />
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
