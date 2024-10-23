import React from "react";

import MovieModal from "../components/MovieModal";
import MoviePage from "./MoviePage";

export default function MovieDetailPage({ movies, movie }) {
  return (
    <>
      <MoviePage movies={movies} />
      <MovieModal movie={movie} />
    </>
  );
}
