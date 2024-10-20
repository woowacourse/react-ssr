import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Footer from './Footer.jsx';
import Header from './Header.jsx';
import { Modal } from './Modal.jsx';
import MovieContainer from './MovieContainer.jsx';
import { emptyMovie } from '../../constants/constant.js';
import getMovieDetail from '../apis/getMovieDetail.js';
import getMovies from '../apis/getMovies.js';

function Home({ movies, movieDetail }) {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [moviesState, setMovies] = useState(movies || []);
  const [movieDetailState, setMovieDetail] = useState(movieDetail);

  const updateMovieDetail = async id => {
    const movieDetail = await getMovieDetail(id);
    setMovieDetail(movieDetail);
  };

  const modalCloseHandler = () => {
    navigate('/');
    setMovieDetail(null);
  };

  const movieClickHandler = async id => {
    navigate('/details/' + id);
    await updateMovieDetail(id);
  };

  useEffect(() => {
    const updateMovie = async () => {
      const movies = await getMovies.nowPlaying();
      setMovies(movies);
    };
    updateMovie();
  }, [getMovies.nowPlaying]);

  useEffect(() => {
    if (movieId === undefined) {
      setMovieDetail(null);
      return;
    }
    updateMovieDetail(movieId);
  }, [movieId]);

  return (
    <>
      <Header
        movie={moviesState[0] || emptyMovie}
        onButtonClick={movieClickHandler}
      />
      <MovieContainer movies={movies} movieClickHandler={movieClickHandler} />
      <Footer />

      {movieDetailState && (
        <Modal movieDetail={movieDetailState} onClose={modalCloseHandler} />
      )}
    </>
  );
}

export default Home;
