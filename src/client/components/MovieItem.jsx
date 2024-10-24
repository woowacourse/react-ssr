import React from "react";
import { TMDB_THUMBNAIL_URL } from "../constants.js";
import starEmptyImg from "@images/star_empty.png";
import { round } from "../utils";
import { Link } from "react-router-dom";

function MovieItem({ id, rate, title, thumbnailUrl }) {
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + "/" + thumbnailUrl;

  return (
    <Link to={`/detail/${id}`} className="item">
      <img className="thumbnail" src={thumbnailFullUrl} alt={title} />
      <div className="item-desc">
        <p className="rate">
          <img src={starEmptyImg} className="star" alt="Star rating" />
          <span>{round(rate, 1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </Link>
  );
}

export default MovieItem;
