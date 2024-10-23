import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Home from './Home';
import Modal from '../components/Modal';
import { HOST_URL } from '../constants';

function MovieDetail({ movies, initialMovieDetail }) {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(initialMovieDetail || null);

  useEffect(() => {
    if (initialMovieDetail) return;

    const getMovieDetail = async () => {
      const response = await fetch(`${HOST_URL}/movie/${id}`);
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
