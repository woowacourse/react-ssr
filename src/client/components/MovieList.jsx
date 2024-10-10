import React from "react";
import { TMDB_THUMBNAIL_URL } from "../constants";

function MovieList({ movies }) {
  return (
    <ul className="thumbnail-list">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieItem key={movie.id} movie={movie} />
        </li>
      ))}
    </ul>
  );
}

export default MovieList;

function MovieItem({ movie }) {
  const { poster_path, vote_average, title } = movie;

  return (
    <div className="item">
      <img className="thumbnail" src={`${TMDB_THUMBNAIL_URL}/${poster_path}`} alt="" />
      <div className="item-desc">
        <p className="rate">
          <img src="/assets/images/star_empty.png" className="star" />
          <span>{vote_average.toFixed(1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
}
