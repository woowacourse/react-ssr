import React from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieDetailModal from './components/MovieDetailModal';

function App({ movieList, movieDetail, showDetailModal }) {
  return (
    <>
      <div id='wrap'>
        <Header bestMovie={movieList[0]} />
        <Home movieList={movieList} />
        <Footer />
      </div>
      {showDetailModal && <MovieDetailModal movie={movieDetail} />}
    </>
  );
}

export default App;
