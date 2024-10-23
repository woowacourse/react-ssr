import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetailModal from "./components/MovieDetailModal";
import NotFondPage from "./components/NotFondPage";

const initialData = window.__INITIAL_DATA__;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App initialMovieList={initialData.movieList} />,
    errorElement: <NotFondPage />,
    children: [
      {
        path: "detail/:id",
        element: (
          <MovieDetailModal initialMovieDetailData={initialData.movieDetail} />
        ),
      },
    ],
  },
]);

hydrateRoot(
  document.getElementById("root"),
  <RouterProvider router={router} />
);
