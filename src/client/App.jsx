import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MoviePage from './pages/MoviePage.jsx';
import MovieDetail from './pages/MovieDetail.jsx';

function App({ initialData }) {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MoviePage movies={initialData.movies} />,
      children: [
        {
          path: '/detail/:id',
          element: <MovieDetail detail={initialData.movieDetail} />,
        },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
