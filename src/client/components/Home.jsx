import React from 'react';
import MovieItem from './MovieItem';

function Home({ movies }) {
  return (
    <main>
      <section>
        <h2>지금 인기 있는 영화</h2>
        <ul className="thumbnail-list">
          {movies.map(({ id, title, vote_average, poster_path }) => (
            <MovieItem key={id} title={title} thumbnailUrl={poster_path} rate={vote_average} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Home;
