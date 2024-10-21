import React, { useEffect } from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieDetailModal from './components/MovieDetailModal';
import { useModal } from './hooks/useModal';

function App({ movieList, movieDetail, showDetailModal }) {
  const [modalActivated, toggleModal] = useModal(showDetailModal);

  return (
    <>
      <div id='wrap'>
        <Header bestMovie={movieList[0]} />
        <Home movieList={movieList} toggleModal={toggleModal} />
        <Footer />
      </div>
      {modalActivated && <MovieDetailModal movie={movieDetail} />}
    </>
  );
}

export default App;
