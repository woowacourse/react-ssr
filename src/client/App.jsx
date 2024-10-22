import React from 'react';
import PATH from '@shared/paths';
import { Route, Routes } from 'react-router-dom';

import Layout from './layouts/Layout';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

function App({ movies, movieDetail }) {
  return (
    <Routes>
      <Route element={<Layout movies={movies} movieDetail={movieDetail} />}>
        <Route path={PATH.home} element={<Home />} />
        <Route path={PATH.movieDetail} element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
