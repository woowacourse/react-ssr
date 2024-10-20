import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Container from './components/Container.jsx';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal.jsx';

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
              {movieDetail && <Modal movieDetail={movieDetail} />}
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
