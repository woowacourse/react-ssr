import React from "react";
import { useNavigate } from "react-router-dom";

import { TMDB_THUMBNAIL_URL } from "../../constant";
import starEmptyImage from "@images/star_empty.png";

const MovieItem = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(`/detail/${movie.id}`);
      }}
    >
      <div className="item">
        <img
          className="thumbnail"
          src={TMDB_THUMBNAIL_URL + movie.backdrop_path}
          alt={movie.title}
        />
        <div className="item-desc">
          <p className="rate">
            <img
              src={starEmptyImage}
              className="star"
            />
            <span>{Number(movie.vote_average).toFixed(1)}</span>
          </p>
          <strong>{movie.title}</strong>
        </div>
      </div>
    </li>
  );
};

export default MovieItem;
