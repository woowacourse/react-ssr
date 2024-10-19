import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import PATH from '@shared/paths';

const { movies = [], movieDetail } = window.__INITIAL_DATA__;

const router = createBrowserRouter([
  {
    path: PATH.home,
    element: <App movies={movies} movieDetail={movieDetail} />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH.movieDetail,
        element: <MovieDetail />,
      },
    ],
  },
]);

hydrateRoot(
  document.getElementById('root'),
  <RouterProvider router={router} />
);
