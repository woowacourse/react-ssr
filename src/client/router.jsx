import React from "react";

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

const initialData = window.__INITIAL_DATA__;

const { movies, movieDetail } = initialData;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home movieItems={movies} />,
      },
      {
        path: "/detail/:id",
        element: <MovieDetail movieItems={movies} serverMovieDetail={movieDetail} />,
      },
    ],
  },
]);

export default router;
