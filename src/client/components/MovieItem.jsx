import React from "react";
import { TMDB_THUMBNAIL_URL } from "../constants.js";
import starEmptyImg from "@images/star_empty.png";
import { round } from "../utils";

function MovieItem({ id, rate, title, thumbnailUrl, onClick }) {
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + "/" + thumbnailUrl;

  const handleClick = (e) => {
    e.preventDefault();
    onClick(id);
  };

  return (
    <a className="item" href={`/detail/${id}`} onClick={handleClick}>
      <img className="thumbnail" src={thumbnailFullUrl} alt={title} />
      <div className="item-desc">
        <p className="rate">
          <img src={starEmptyImg} className="star" alt="Star rating" />
          <span>{round(rate, 1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </a>
  );
}

export default MovieItem;
