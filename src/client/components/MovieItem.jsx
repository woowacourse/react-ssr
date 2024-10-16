import React from "react";
import { TMDB_THUMBNAIL_URL } from "../../constant";
import starEmptyImage from "@images/star_empty.png";

const MovieItem = ({ id, title, backdrop_path, vote_average }) => {
  return (
    <li key={id}>
      <a href="/">
        <div className="item">
          <img
            className="thumbnail"
            src={TMDB_THUMBNAIL_URL + backdrop_path}
            alt={title}
          />
          <div className="item-desc">
            <p className="rate">
              <img
                src={starEmptyImage}
                className="star"
              />
              <span>{vote_average}</span>
            </p>
            <strong>{title}</strong>
          </div>
        </div>
      </a>
    </li>
  );
};

export default MovieItem;
