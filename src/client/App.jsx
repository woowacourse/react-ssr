import React from "react";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const { movies } = window.__INITIAL_DATA__;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home movies={movies} />,
  },
  {
    path: "/detail/:id",
    element: <Home movies={movies} />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
