import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetailModal from "./components/MovieDetailModal";

const initialData = window.__INITIAL_DATA__;

const router = createBrowserRouter([
  {
    path: "",
    element: <App movieList={initialData.movieList} />,
    errorElement: <div>찾으시는 페이지가 없습니다.</div>,
    children: [
      {
        path: "detail/:id",
        element: <MovieDetailModal movieDetail={initialData.movieDetail} />,
      },
    ],
  },
]);
hydrateRoot(
  document.getElementById("root"),
  <RouterProvider router={router} />
);
