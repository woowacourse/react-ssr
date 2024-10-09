import React from "react";

import { TMDB_THUMBNAIL_URL } from "../constants";

import starEmptyImage from "@images/star_empty.png";

export default function MovieList({ movies }) {
  return (
    <div className="container">
      <main>
        <section>
          <h2>지금 인기 있는 영화</h2>
          {movies && (
            <ul className="thumbnail-list">
              {movies.map((movie) => (
                <li key={movie.id}>
                  <MovieItem movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

function MovieItem({ movie }) {
  const { title, poster_path, vote_average } = movie;

  return (
    <div className="item">
      <img
        className="thumbnail"
        src={`${TMDB_THUMBNAIL_URL}/${poster_path}`}
        alt={title}
      />
      <div className="item-desc">
        <p className="rate">
          <img className="star" src={starEmptyImage} />
          <span>{vote_average.toFixed(1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
}
