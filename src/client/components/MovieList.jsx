import React from "react";
<<<<<<< HEAD
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
=======
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
>>>>>>> a6f5ac2d7ceab8b83ab8c8872de496f3e48fb52e
  );
}

export default MovieList;
<<<<<<< HEAD
=======

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
>>>>>>> a6f5ac2d7ceab8b83ab8c8872de496f3e48fb52e
