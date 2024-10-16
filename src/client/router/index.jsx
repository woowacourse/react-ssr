import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import React from "react";
import MoviePage from "../pages/MoviePage";
import MovieDetail from "../pages/MovieDetail";

const initialData = window.__INITIAL_DATA__;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MoviePage initialData={initialData} />,
      },
      {
        path: `detail/:id`,
        element: (
          <>
            <MoviePage initialData={initialData} />
            <MovieDetail initialData={initialData} />
          </>
        ),
      },
    ],
  },
]);

export default router;
