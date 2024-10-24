import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MoviePage from './pages/MoviePage.jsx';
import MovieDetail from './pages/MovieDetail.jsx';

const initialData = window.__INITIAL_DATA__;

const router = createBrowserRouter([
  {
    path: '/',
    element: <MoviePage movies={initialData.movies} />,
  },
  {
    path: '/detail/:id',
    element: (
      <>
        <MoviePage movies={initialData.movies} />
        <MovieDetail detail={initialData.movieDetail} />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
