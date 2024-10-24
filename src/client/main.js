import React from "react";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import { hydrateRoot } from "react-dom/client";

import App from "./App.jsx";

const { movies, movieDetailItem } = window.__INITIAL_DATA__;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App nowPlayingMovies={movies} />,
  },
  {
    path: "/detail/:movieId",
    element: <App nowPlayingMovies={movies} movieDetailItem={movieDetailItem} />,
  },
]);

hydrateRoot(document.getElementById("root"), <RouterProvider router={router} />);
