import React from "react";
import DetailModal from "../client/pages/DetailModal";
import HomePage from "../client/pages/Home";
import { getMovie, getMovies, TMDB_MOVIE_LISTS } from "./api/tmdb";

export const ROUTE = {
  home: "/",
  detail: (id) => `/detail/${id}`,
};

const routes = [
  {
    path: "/",
    loader: async () => await getMovies(TMDB_MOVIE_LISTS.nowPlaying),
    element: <HomePage />,
    children: [
      {
        path: "/detail/:id",
        loader: async ({ params }) => await getMovie(params.id),
        element: <DetailModal />,
      },
    ],
  },
];

export default routes;
