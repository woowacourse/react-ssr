import React from 'react';
import MovieItem from './MovieItem';

const Container = ({ movies }) => {
  return (
    <div className="container">
      <main>
        <section>
          <h2 className="subtitle">지금 인기 있는 영화</h2>
          <ul className="thumbnail-list">
            {movies.map(({ id, title, vote_average, poster_path }) => (
              <li key={id}>
                <MovieItem
                  rate={vote_average}
                  title={title}
                  thumbnailUrl={poster_path}
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Container;
