import React from "react";
import { TMDB_THUMBNAIL_URL } from "../../server/constants";

function MovieList({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <li key={movie.id}>
        <div className="item" >
          <img className="thumbnail" src={`${TMDB_THUMBNAIL_URL}${movie.poster_path}`} alt={movie.title} />
          <div className="item-desc">
            <p className="rate">
              <img className="star" src="/assets/images/star_empty.png"/>
              <span>${movie.vote_average.toFixed(1)}</span>
            </p>
            <strong>${movie.title}</strong>
          </div>
        </div>
        </li>
      ))}
      </>
  );
}

export default MovieList;