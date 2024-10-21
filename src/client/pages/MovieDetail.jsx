import React, { useState } from 'react';
import MovieDetailModal from '../components/MovieDetailModal';
import MovieList from '../components/MovieList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ROUTE_PATH } from '../constants/routePath';
import { useNavigate } from 'react-router-dom';

function MovieDetail({ movies, movieDetail, showModal }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(showModal);

  const handleClick = () => {
    setIsOpen(false);
    navigate(ROUTE_PATH.home);
  };

  return (
    <>
      <Header movie={movies[0]} />
      <MovieList movies={movies} />
      <Footer />

      {isOpen && (
        <MovieDetailModal movieDetail={movieDetail} onClose={handleClick} />
      )}
    </>
  );
}

export default MovieDetail;
