import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import MovieDetailModal from "../components/MovieDetailModal";
import { useNavigate, useParams } from "react-router-dom";

const fetchMovieDetail = async (movieId) => {
  const response = await fetch(`/${movieId}`);

  return await response.json();
};

const MovieDetailPage = ({ popularMovies, bestMovieItem, movieInfo }) => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movieDetail, setMovieDetail] = useState();

  const handleClickClose = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchMovie = async (movieId) => {
      const movieItem = await fetchMovieDetail(movieId);
      setMovieDetail(movieItem);
    };

    if (movieInfo && movieInfo.movieId === Number(movieId)) {
      setMovieDetail(movieInfo);
    } else {
      fetchMovie(movieId);
    }
  }, [movieInfo, movieId]);

  return (
    <>
      <HomePage popularMovies={popularMovies} bestMovieItem={bestMovieItem} />
      {movieDetail && (
        <MovieDetailModal
          movieDetail={movieDetail}
          onClose={handleClickClose}
        />
      )}
    </>
  );
};

export default MovieDetailPage;
