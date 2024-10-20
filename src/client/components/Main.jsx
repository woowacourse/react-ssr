import React from 'react';
import { MOVIE_LIST_TITLE, MOVIE_LIST_TYPE } from '../../server/src/constants';
import MovieItem from './MovieItem';
import Header from '../components/Header';

const Main = ({ movies }) => {
  return (
    <>
      <Header movie={movies[0]} />
      <main className='container'>
        <section>
          <h2>{MOVIE_LIST_TITLE[MOVIE_LIST_TYPE.default]}</h2>
          <ul className='thumbnail-list'>
            {movies.map((movie) => (
              <li key={movie.id}>
                <MovieItem movie={movie} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Main;
