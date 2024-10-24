import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Main from '../components/Main';
import MovieDetail from '../components/MovieDetail';

const initialData = window.__INITIAL_DATA__;

const { movies, movieDetail } = initialData;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main movies={movies} />,
      },
      {
        path: '/detail/:id',
        element: <MovieDetail movies={movies} movieDetail={movieDetail} />,
      },
    ],
  },
]);

export default router;
