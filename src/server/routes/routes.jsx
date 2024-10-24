import React from 'react';
import { fetchMovieDetail, fetchMovies } from '../apis/fetch';
import { json, useLoaderData } from 'react-router-dom';

import Home from '../../client/pages/Home';
import MovieDetail from '../../client/pages/MovieDetail';

export const routes = [
  {
    path: '/',
    loader: async () => {
      const movie = await fetchMovies();
      return json(movie);
    },
    Component() {
      const movies = useLoaderData();
      return <Home movies={movies} />;
    },
  },
  {
    path: '/detail/:id',
    loader: async ({ params }) => {
      const { id } = params;
      const movies = await fetchMovies();
      const movieDetail = await fetchMovieDetail(id);

      return json({ movies, movieDetail });
    },
    Component() {
      const { movies, movieDetail } = useLoaderData();
      return (
        <MovieDetail
          movies={movies}
          movieDetail={movieDetail}
          showModal={true}
        />
      );
    },
  },
];
