import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainPage from './MainPage';
import MovieDetailModal from '../components/MovieDetailModal';
import useMovieDetail from '../hooks/useMovieDetail';

export default function MovieDetailPage({ initialMovieDetail, movies }) {
  const [isOpen, setIsOpen] = useState(true);
  const { id } = useParams();

  const { movieDetail, isLoading } = useMovieDetail(initialMovieDetail, id);

  const handleCloseModal = () => setIsOpen(false);

  const isMovieDetail = (movieDetail || initialMovieDetail) !== undefined;

  useEffect(() => {
    setIsOpen(true);
  }, [id]);

  return (
    <>
      <MainPage movies={movies} />
      {isMovieDetail && isOpen && (
        <MovieDetailModal
          isLoading={isLoading}
          movieDetail={movieDetail || initialMovieDetail}
          onCloseModal={handleCloseModal}
        />
      )}
    </>
  );
}
