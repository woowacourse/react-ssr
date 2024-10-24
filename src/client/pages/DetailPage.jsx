import React, {useState, useEffect} from 'react';
import MainPage from './MainPage';
import Modal from '../components/Modal';
import {getMovieDetail} from '../remote/movieDetail';
import {useParams} from 'react-router-dom';

export default function DetailPage({movies, movieDetail}) {
  const movieId = useParams().id;
  const [movie, setMovie] = useState(movieDetail);

  useEffect(() => {
    if (movieId && !movie) {
      getMovieDetail(movieId).then(movieDetailData => {
        setMovie(movieDetailData);
      });
    }
  }, [movieId]);

  return (
    <>
      <MainPage movies={movies} />
      {movie && <Modal movieDetail={movie} />}
    </>
  );
}
