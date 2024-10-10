import { TMDB_THUMBNAIL_URL } from "../../constants";
import React from "react";

const MovieItem = ({ rate, title, thumbnailUrl, onClick }) => {
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + "/" + thumbnailUrl;

  return (
    <div className="item" onClick={onClick}>
      <img className="thumbnail" src={thumbnailFullUrl} alt={title} />
      <div className="item-desc">
        <p className="rate">
          <img src="/assets/images/star_empty.png" className="star" />
          <span>{rate}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
};

export default MovieItem;
