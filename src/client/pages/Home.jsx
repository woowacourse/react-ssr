import React from 'react';

import MovieItem from '../components/MovieItem';

function Home({ movies }) {
  return (
    <section>
      <h2>지금 인기 있는 영화</h2>
      <ul className="thumbnail-list">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </section>
  );
}

export default Home;
