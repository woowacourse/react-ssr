import React from 'react';
import MovieItem from './MovieItem';

function Home({ movieList }) {
  return (
    <>
      {movieList.map(({ id, title, poster_path, vote_average }) => (
        <li key={id}>
          <MovieItem
            title={title}
            thumbnailUrl={poster_path}
            rate={vote_average}
          />
        </li>
      ))}
    </>
  );
}

export default Home;
