import React from "react";

import MovieDetailModal from "../client/components/Movie/MovieDetailModal";
import MovieListPage from "../client/pages/MovieListPage";

import { loadMovieDetail } from "../client/loaders/loadMovieDetail";
import { loadMovies } from "../client/loaders/loadMovies";
import { MOVIE_PAGE_PATH } from "./constants/path";

export const routes = [
  {
    path: MOVIE_PAGE_PATH.home,
    loader: loadMovies,
    element: <MovieListPage />,
    children: [
      {
        path: MOVIE_PAGE_PATH.movieDetail,
        loader: loadMovieDetail,
        element: <MovieDetailModal />,
      },
    ],
  },
];
