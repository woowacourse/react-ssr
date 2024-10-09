import React from 'react';
import { MOVIE_LIST_TITLE } from '../../server/src/constants';
import MovieItem from './MovieItem';

const Main = ({ movies, movieListType }) => {
  return (
    <main className='container'>
      <section>
        <h2>{MOVIE_LIST_TITLE[movieListType]}</h2>
        <ul className='thumbnail-list'>
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieItem movie={movie} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
