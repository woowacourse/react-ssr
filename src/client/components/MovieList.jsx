import React from "react";
import MovieItem from "./MovieItem";
import { Link } from "react-router-dom";

function MovieList({ movies }) {
  return (
    <section>
      <h2>지금 인기 있는 영화</h2>
      <ul className="thumbnail-list">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/detail/${movie.id}`}>
            <li>
              <MovieItem movie={movie} />
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}

export default MovieList;
