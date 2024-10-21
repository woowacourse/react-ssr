import React from "react";
import Home from "../client/components/Home";
import MovieModal from "../client/components/MovieModal";
import NotFound from "../client/components/NotFound";
import getMovieDetail from "./apis/getMovieDetail";
import getMovieList from "./apis/getMovieList";

const routes = [
  {
    path: "/",
    id: "home",
    element: <Home />,
    loader: getMovieList,
    children: [
      {
        path: "/detail/:id",
        element: <MovieModal />,
        loader: getMovieDetail,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
