import React from "react";
import { TMDB_THUMBNAIL_URL } from "../../constants";

const MovieItem = ({ posterUrl, title, voteAverage, handleClick }) => {
  return (
    <div className="item" onClick={handleClick}>
      <img
        className="thumbnail"
        src={`${TMDB_THUMBNAIL_URL}${posterUrl}`}
        alt={`${title}`}
      />
      <div className="item-desc">
        <p className="rate">
          <img src="/assets/images/star_empty.png" className="star" alt="" />
          <span>{voteAverage}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
};

export default MovieItem;
