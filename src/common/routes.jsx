import React from "react";
import Home from "../client/components/Home";
import MovieModal from "../client/components/MovieModal";
import NotFound from "../client/components/NotFound";
import loadMovieList from "./loaders/loadMovieList";
import loadMovieDetail from "./loaders/loadMovieDetail";

const routes = [
  {
    path: "/",
    id: "home",
    element: <Home />,
    loader: loadMovieList,
    children: [
      {
        path: "/detail/:id",
        element: <MovieModal />,
        loader: loadMovieDetail,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
