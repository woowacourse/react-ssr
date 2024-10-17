import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTE_PATHS } from '../constants/routePath';

import AppLayout from './components/AppLayout';

import MainPage from './pages/MainPage';
import MovieDetailPage from './pages/MovieDetailPage';

export default function App({ initialMovieDetail, movies }) {
  return (
    <Routes>
      <Route element={<AppLayout movies={movies} />}>
        <Route path={ROUTE_PATHS.root} element={<MainPage movies={movies} />} />
        <Route
          path={ROUTE_PATHS.movieDetail}
          element={<MovieDetailPage initialMovieDetail={initialMovieDetail} movies={movies} />}
        />
      </Route>
    </Routes>
  );
}
