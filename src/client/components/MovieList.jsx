import React from "react";
import { TMDB_THUMBNAIL_URL } from "../../server/api/endpoints";

import starEmptyImage from "@images/star_empty.png";

const MovieList = ({ movies }) => {
  return movies.map((movie) => (
    <li>
      <a href={`/detail/${movie.id}`}>
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
      </a>
    </li>
  ));
};

export default MovieList;
