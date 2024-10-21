import React from "react";
import { TMDB_THUMBNAIL_URL } from "../../server/api/endpoints";

import starEmptyImage from "@images/star_empty.png";
import { useNavigate } from "react-router-dom";

const MovieList = ({ movies, handleMovieClick }) => {
  return movies.map((movie) => (
    <li key={movie.id} onClick={() => handleMovieClick(movie.id)}>
      <div className="item">
        <img
          className="thumbnail"
          src={`${TMDB_THUMBNAIL_URL}${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="item-desc">
          <p className="rate">
            <img src={starEmptyImage} className="star" />
            <span>{movie.vote_average}</span>
          </p>
          <strong>{movie.title}</strong>
        </div>
      </div>
    </li>
  ));
};

export default MovieList;
