import React from "react";
import MovieItem from "./MovieItem";
import { Link } from "react-router-dom";

function MovieList({ movies }) {
  return (
    <ul className="thumbnail-list">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/detail/${movie.id}`}>
          <li>
            <MovieItem key={movie.id} movie={movie} />
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default MovieList;
