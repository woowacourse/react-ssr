import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Container from './components/Container.jsx';
import Footer from './components/Footer.jsx';
import MovieDetailModal from './components/MovieDetailModal.jsx';

function App({ movies, movieDetail }) {
  const bestMovieItem = movies[0];

  return (
    <>
      <Header bestMovieItem={bestMovieItem} />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Container movieItems={movies} />
            </>
          }
        />
        <Route
          path='/detail/:id'
          element={
            <>
              <Container movieItems={movies} />
              {movieDetail && <MovieDetailModal movieDetail={movieDetail} />}
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
