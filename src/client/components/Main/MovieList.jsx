import React from "react";
import MovieItem from "./MovieItem";

export default function MovieList({ movies }) {
  return (
    <ul id="movie-list" className="thumbnail-list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
