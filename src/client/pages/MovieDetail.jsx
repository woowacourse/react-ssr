import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Home from './Home';
import Modal from '../components/Modal';
import { TMDB_MOVIE_DETAIL_URL, FETCH_OPTIONS } from '../constants';

function MovieDetail({ movies, initialMovieDetail }) {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(initialMovieDetail || null);

  useEffect(() => {
    if (initialMovieDetail) return;

    const getMovieDetail = async () => {
      const response = await fetch(TMDB_MOVIE_DETAIL_URL + id + '?language=ko-KR', FETCH_OPTIONS);
      const data = await response.json();

      setMovieDetail(data);
    };

    getMovieDetail();
  }, [id]);

  return (
    <>
      <Home movies={movies} />
      {movieDetail && <Modal movieDetail={movieDetail} />}
    </>
  );
}

export default MovieDetail;
