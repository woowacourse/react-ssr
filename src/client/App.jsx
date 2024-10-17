import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import AppLayout from './components/AppLayout';
import { ROUTE_PATHS } from '../constants/routePath';

export default function App({ movies }) {
  return (
    <Routes>
      <Route path={ROUTE_PATHS.root} element={<AppLayout movies={movies} />}>
        <Route index element={<MainPage movies={movies} />} />
      </Route>
    </Routes>
  );
}
