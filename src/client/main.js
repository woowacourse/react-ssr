import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import React from 'react';
import { hydrateRoot } from 'react-dom/client';

const { movies, movieDetail } = window.__INITIAL_DATA__;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home movies={movies} />,
    children: [
      {
        path: ':moiveId',
        element: <Home movies={movies} movieDetail={movieDetail} />,
      },
    ],
  },
]);

hydrateRoot(
  document.getElementById('root'),
  <RouterProvider router={router} />
);
