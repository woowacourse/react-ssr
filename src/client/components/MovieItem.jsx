import { TMDB_THUMBNAIL_URL } from "../constants";
import React from "react";
import starEmpty from "@images/star_empty.png";

const MovieItem = ({ rate, title, thumbnailUrl, onClick }) => {
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + "/" + thumbnailUrl;

  return (
    <div className="item" onClick={onClick}>
      <img className="thumbnail" src={thumbnailFullUrl} alt={title} />
      <div className="item-desc">
        <p className="rate">
          <img src={starEmpty} className="star" />
          <span>{Math.round(rate * 10) / 10}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
};

export default MovieItem;
