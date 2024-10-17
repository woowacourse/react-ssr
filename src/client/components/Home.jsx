import React, { useEffect, useState } from 'react';

import { Modal } from './Modal.jsx';
import getMovies from '../apis/getMovies.js';
import Header from './Header.jsx';
import { emptyMovie } from '../../constants/constant.js';
import MovieContainer from './MovieContainer.jsx';
import getMovieDetail from '../apis/getMovieDetail.js';

function Home({ movies, movieDetail }) {
  const [movies, setMovies] = useState(movies || []);
  const [movieDetail, setMovieDetail] = useState(movieDetail);
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
      <Header movie={movies[0] || emptyMovie} />
      <MovieContainer
        movies={movies}
        movieClickHandler={id => updateMovieDetail(id)}
      />
      <Footer />

      {movieDetail && (
        <Modal movieDetail={movieDetail} onClose={modalCloseHandler} />
      )}
    </>
  );
}

export default Home;
