import { TMDB_THUMBNAIL_URL } from "../../server/constants/constants";
import React from "react";

function MovieItem({ rate, title, thumbnailUrl }) {
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + "/" + thumbnailUrl;

  return (
    <div className="item">
      <img className="thumbnail" src={thumbnailFullUrl} alt={title} />
      <div className="item-desc">
        <p className="rate">
          <img src="../assets/images/star_empty.png" className="star" />
          <span>{round(rate, 1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export default MovieItem;

export const round = (value, decimals = 0) => {
  const factor = 10 ** decimals;

  return Math.round(value * factor) / factor;
};
