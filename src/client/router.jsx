import React from "react";

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";

const initialData = window.__INITIAL_DATA__;

const { movies } = initialData;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home movieItems={movies} />,
      },
    ],
  },
]);

export default router;
