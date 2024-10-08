import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies }) => {
  return (
    <div className='container'>
      <main>
        <section>
          <h2>지금 상영 중인 영화</h2>
          <ul className='thumbnail-list'>
            {movies.map((movie, index) => {
              return <MovieItem movie={movie} key={index} />;
            })}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MovieList;
