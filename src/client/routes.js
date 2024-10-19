import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import MoviePage from "./pages/MoviePage";
import MovieDetailPage from "./pages/MovieDetailPage";

const { movies, movie } = window.__INITIAL_DATA__ || {};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MoviePage movies={movies} />,
      },
      {
        path: "detail/:id",
        element: <MovieDetailPage movies={movies} movie={movie} />,
      },
    ],
  },
]);

export default router;
