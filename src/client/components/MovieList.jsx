import React from "react";
import MovieItem from "./MovieItem";

function MovieList({ movies }) {
  return (
    <ul className="thumbnail-list">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieItem movie={movie} />
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
