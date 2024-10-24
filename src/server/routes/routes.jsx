import React from 'react';

import App from '../../client/App';
import { fetchMovieList, fetchMovieDetail } from '../src/fetchMovies';
import { TMDB_MOVIE_LISTS, TMDB_MOVIE_DETAIL_URL } from '../src/constants';
import { json, useLoaderData } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    loader: async () => {
      const movieList = await fetchMovieList(TMDB_MOVIE_LISTS.NOW_PLAYING);

      return json(movieList);
    },
    Component() {
      const movieList = useLoaderData();

      return (
        <App movieList={movieList} movieDetail={{}} showDetailModal={false} />
      );
    },
  },
  {
    path: '/detail/:id',
    loader: async ({ params }) => {
      const { id } = params;
      const movieList = await fetchMovieList(TMDB_MOVIE_LISTS.NOW_PLAYING);
      const movieDetail = await fetchMovieDetail(
        `${TMDB_MOVIE_DETAIL_URL}${id}`
      );

      return json({ movieList, movieDetail });
    },
    Component() {
      const { movieList, movieDetail } = useLoaderData();

      return (
        <App
          movieList={movieList}
          movieDetail={movieDetail}
          showDetailModal={true}
        />
      );
    },
  },
];
