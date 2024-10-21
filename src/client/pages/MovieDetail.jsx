import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/Header";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";
import MovieDetailModal from "../components/MovieDetailModal";

import useMovieDetailData from "../hooks/useMovieDetailData";

export default function MovieDetail({ movies, initialMovieDetail }) {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const { id: movieId } = useParams();
  const { movieDetailData } = useMovieDetailData({
    initialMovieDetail,
    movieId,
  });

  const currentMovieDetail = movieDetailData ?? initialMovieDetail;

  const navigate = useNavigate();

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <>
      <Header movie={movies[0]} />
      <MovieList movies={movies} />
      <Footer />
      {isModalOpen && currentMovieDetail && (
        <MovieDetailModal
          movieDetail={currentMovieDetail}
          onClose={handleModalClose}
        />
      )}
    </>
  );
}
