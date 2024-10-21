import React, { useState } from 'react';
import MovieDetailModal from '../components/MovieDetailModal';
// import { useNavigate } from 'react-router-dom';
import MovieList from '../components/MovieList';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MovieDetail({ movies, movieDetail, showModal }) {
  // const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(showModal);

  const handleClick = () => {
    setIsOpen(false);
    alert('?');
  };

  return (
    <>
      <Header movie={movies[0]} />
      <MovieList movies={movies} />
      <Footer />

      {isOpen && (
        <MovieDetailModal
          movieDetail={movieDetail}
          onCloseModal={handleClick}
        />
      )}
    </>
  );
}

export default MovieDetail;
