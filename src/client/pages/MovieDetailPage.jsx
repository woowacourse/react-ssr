import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import MovieDetailModal from "../components/MovieDetailModal";
import { useParams } from "react-router-dom";
import { fetchMovieDetail } from "../../server/apis/movie";
import { parseMovieDetail } from "../../server/models/parseMovieDetail";

const MovieDetailPage = ({ popularMovies, bestMovieItem }) => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState();

  useEffect(() => {
    const fetchMovie = async (movieId) => {
      const data = await fetchMovieDetail(movieId);
      const movieItem = parseMovieDetail(data);
      setMovieDetail(movieItem);
    };

    fetchMovie(movieId);
  }, [movieId]);

  return (
    <>
      <HomePage popularMovies={popularMovies} bestMovieItem={bestMovieItem} />
      {movieDetail && <MovieDetailModal movieDetail={movieDetail} />}
    </>
  );
};

export default MovieDetailPage;
