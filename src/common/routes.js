import React from "react";
import DetailPage from "../client/pages/Detail";
import HomePage from "../client/pages/Home";
import { getMovie, getMovies, TMDB_MOVIE_LISTS } from "./api/tmdb";

const routes = [
  {
    path: "/",
    loader: async () => await getMovies(TMDB_MOVIE_LISTS.nowPlaying),
    element: <HomePage />,
  },
  {
    path: "/detail/:id",
    loader: async ({ params }) => {
      const movies = await getMovies(TMDB_MOVIE_LISTS.nowPlaying);
      const movie = await getMovie(params.id);
      return { movies, movie };
    },
    element: <DetailPage />,
  },
];

export default routes;
