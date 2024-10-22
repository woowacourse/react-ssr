import React from "react";
import { round } from "../utils";
import { TMDB_THUMBNAIL_URL } from "../constants";
import starEmptyImage from "@images/star_empty.png";
import { Link } from "react-router-dom";

function MovieItem({ id, rate, title, thumbnailUrl }) {
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + "/" + thumbnailUrl;

  const handleLinkClick = () => {
    sessionStorage.setItem(SESSION_STORAGE_KEY.isNavigated, "true");
  };

  return (
    <Link to={`/detail/${id}`} onClick={handleLinkClick} className="item">
      <img className="thumbnail" src={thumbnailFullUrl} alt={title} />
      <div className="item-desc">
        <p className="rate">
          <img src={starEmptyImage} className="star" alt="" />
          <span>{round(rate, 1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </Link>
  );
}

export default MovieItem;
