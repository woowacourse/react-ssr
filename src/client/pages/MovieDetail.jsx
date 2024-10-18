import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Home from './Home';
import Modal from '../components/Modal';
import { TMDB_MOVIE_DETAIL_URL, FETCH_OPTIONS } from '../constants';

function MovieDetail({ movies, movieDetail }) {
  const { id } = useParams();

  const [currentMovieDetail, setCurrentMovieDetail] = useState(movieDetail || null);

  useEffect(() => {
    const getMovieDetail = async () => {
      const response = await fetch(TMDB_MOVIE_DETAIL_URL + id + '?language=ko-KR', FETCH_OPTIONS);
      const data = await response.json();

      setCurrentMovieDetail(data);
    };

    getMovieDetail();
  }, []);

  return (
    <>
      <Home movies={movies} />
      {currentMovieDetail && <Modal movieDetail={currentMovieDetail} />}
    </>
  );
}

export default MovieDetail;
