import React, { useState } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';

import Home from './Home';
import MovieDetailModal from '../components/MovieDetailModal';
import useMovieDetail from '../hooks/apis/useMovieDetail';
import routes from '../router/routes';

export default function MovieDetail() {
  const { movies: initialMovies, movieDetail: initialMovieDetail } =
    useOutletContext();

  const [isOpen, setIsOpen] = useState(true);
  const { id } = useParams();
  const { movieDetail, isLoading } = useMovieDetail({ initialMovieDetail, id });

  const navigate = useNavigate();
  const handleCloseModal = () => {
    setIsOpen(false);
    navigate(routes.home());
  };

  return (
    <>
      <Home movies={initialMovies} />
      {isOpen && !isLoading && (
        <MovieDetailModal movieDetail={movieDetail} close={handleCloseModal} />
      )}
    </>
  );
}
