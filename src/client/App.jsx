import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';

function App({ movies }) {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout bestMovie={movies[0]} />,
      children: [
        {
          path: '',
          element: <Home movies={movies} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
