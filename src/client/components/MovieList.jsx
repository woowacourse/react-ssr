import React from 'react';
import Movie from './Movie';

export default function MovieList({movies}) {
  return (
    <main>
      <section>
        <h2>지금 인기 있는 영화</h2>
        <ul class="thumbnail-list">
          {movies.map(movie => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </ul>
      </section>
    </main>
  );
}
