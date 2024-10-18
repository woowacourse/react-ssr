import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Layout from './pages/Layout';

function App({ movies, movieDetail }) {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout bestMovie={movies[0]} />,
      children: [
        {
          path: '',
          element: <Home movies={movies} />,
        },
        {
          path: 'detail/:id',
          element: <MovieDetail movies={movies} movieDetail={movieDetail} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
