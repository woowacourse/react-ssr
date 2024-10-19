import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import DetailPage from "./pages/Detail";

const { movies } = window.__INITIAL_DATA__;

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage movies={movies} />,
  },
  {
    path: "/detail/:id",
    element: <DetailPage movies={movies} />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
