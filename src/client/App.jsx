import React from 'react';
import PATH from '@shared/paths';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';

function App({ movies, movieDetail }) {
  return (
    <Routes>
      <Route element={<Layout movies={movies} movieDetail={movieDetail} />}>
        <Route path={PATH.root} element={<MainPage />} />
        <Route path={PATH.movieDetail} element={<MovieDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
