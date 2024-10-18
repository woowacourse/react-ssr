import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MainPage from './MainPage';
import MovieDetailModal from '../components/MovieDetailModal';
import useMovieDetail from '../hooks/useMovieDetail';
import { ROUTE_PATHS } from '../../constants/routePath';

export default function MovieDetailPage({ initialMovieDetail, movies }) {
  const [isOpen, setIsOpen] = useState(true);
  const { id } = useParams();

  const navigate = useNavigate();

  const { movieDetail, isLoading } = useMovieDetail(initialMovieDetail, id);

  const handleCloseModal = () => {
    setIsOpen(false);
    navigate(ROUTE_PATHS.root);
  };

  const isMovieDetail = (movieDetail || initialMovieDetail) !== undefined;

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
