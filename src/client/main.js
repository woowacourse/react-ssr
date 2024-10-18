import React from "react";
import { hydrateRoot } from "react-dom/client";
import AppPage from "./AppPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const { movies } = window.__INITIAL_DATA__;

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppPage movies={movies} />,
  },
  {
    path: "/detail:id",
    element: <AppPage movies={movies} />,
  },
]);

hydrateRoot(
  document.getElementById("root"),
  <RouterProvider router={AppRouter} />
);

export { AppRouter };
