import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

const { movies = [] } = window.__INITIAL_DATA__;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App movies={movies} />,
    children: [
      {
        index: true,
        element: <Home movies={movies} />,
      },
      {
        path: '/detail/:id',
        element: <MovieDetail movies={movies} />,
      },
    ],
  },
]);

hydrateRoot(
  document.getElementById('root'),
  <RouterProvider router={router} />
);
