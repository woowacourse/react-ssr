import React from "react";
import { hydrateRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import MovieDetailModal from "./components/MovieDetailModal";

const INITIAL_DATA = window ? window.__INITIAL_DATA__ || {} : {};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App movies={INITIAL_DATA?.movies} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "detail/:id",
        element: (
          <MovieDetailModal movieDetail={INITIAL_DATA?.currentMovieDetail} />
        ),
      },
    ],
  },
]);

hydrateRoot(
  document.getElementById("wrap"),
  <RouterProvider router={router} />
);
