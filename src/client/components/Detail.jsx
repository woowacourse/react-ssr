import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../../server/utils/tmdb.js";
import Home from "../Home.jsx";
import MovieDetailModal from "./MovieDetailModal.jsx";

const Detail = ({ movies, movieDetail }) => {
  const [movie, setMovie] = useState(movieDetail);
  const movieId = useParams().id;

  useEffect(() => {
    fetchMovie(movieId).then((data) => setMovie(data));
  }, [movieId, movieDetail]);

  return (
    <>
      <Home movies={movies} />
      {movie && <MovieDetailModal movieDetail={movie} />}
    </>
  );
};

export default Detail;
