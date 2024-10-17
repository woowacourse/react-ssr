import React, { useEffect, useState } from 'react';

import Footer from './Footer.jsx';
import Header from './Header.jsx';
import { Modal } from './Modal.jsx';
import MovieContainer from './MovieContainer.jsx';
import { emptyMovie } from '../../constants/constant.js';
import getMovieDetail from '../apis/getMovieDetail.js';
import getMovies from '../apis/getMovies.js';

function Home({ movies, movieDetail }) {
  const [moviesState, setMovies] = useState(movies || []);
  const [movieDetailState, setMovieDetail] = useState(movieDetail);
  useEffect(() => {
    const updateMovie = async () => {
      const movies = await getMovies.nowPlaying();
      setMovies(movies);
    };
    updateMovie();
  }, [getMovies.nowPlaying]);

  const updateMovieDetail = async id => {
    const movieDetail = await getMovieDetail(id);
    setMovieDetail(movieDetail);
  };

  const modalCloseHandler = () => {
    setMovieDetail(null);
  };

  return (
    <>
      <Header movie={moviesState[0] || emptyMovie} />
      <MovieContainer
        movies={movies}
        movieClickHandler={id => updateMovieDetail(id)}
      />
      <Footer />

      {movieDetailState && (
        <Modal movieDetail={movieDetailState} onClose={modalCloseHandler} />
      )}
    </>
  );
}

export default Home;
