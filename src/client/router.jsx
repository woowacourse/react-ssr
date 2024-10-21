import React from "react";
import { createBrowserRouter, useLoaderData } from "react-router-dom";

import Home from "./pages/Home";
import MovieDetailModal from "./components/MovieDetailModal";

const INITIAL_DATA = window.__INITIAL_DATA__;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home movies={INITIAL_DATA.movies} />,
  },
  {
    path: "/detail/:id",
    element: (
      <>
        <Home movies={INITIAL_DATA.movies} />
        <MovieDetailModal movie={INITIAL_DATA.movieDetail} />
      </>
    ),
  },
]);

export default router;
