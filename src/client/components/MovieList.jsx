import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movieList }) => {
  return (
    <div className='container'>
      <main>
        <section>
          <h2>지금 인기 있는 영화</h2>
          <ul className='thumbnail-list'>
            {movieList.map((movie) => (
              <li key={movie.id}>
                <MovieItem {...movie} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MovieList;
