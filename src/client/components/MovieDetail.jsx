import React from 'react';
import Main from './Main';
import MovieDetailModal from './MovieDetailModal';

const MovieDetail = ({ movies, movieDetail }) => {
  return (
    <>
      <Main movies={movies} />
      <MovieDetailModal movieDetail={movieDetail} />
    </>
  );
};

export default MovieDetail;
