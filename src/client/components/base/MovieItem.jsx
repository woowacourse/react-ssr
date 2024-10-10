import React from "react";
import { TMDB_THUMBNAIL_URL } from "../../Constant";
import { StarEmpty } from "../../ImageResources";
import { round } from "../../utils";

function MovieItem({ rate, title, thumbnailUrl, onClick }) {
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + "/" + thumbnailUrl;

  return (
    <div className="item" onClick={onClick}>
      <img className="thumbnail" src={thumbnailFullUrl} alt={title} />
      <div className="item-desc">
        <p className="rate">
          <img src={StarEmpty} className="star" />
          <span>{round(rate, 1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export default MovieItem;
