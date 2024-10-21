import React from "react";

import starEmptyImage from "@images/star_empty.png";

import { TMDB_THUMBNAIL_URL } from "../../../common/constants/api";

export default function MovieItem({
  title,
  poster_path,
  vote_average,
  onClick,
}) {
  const thumbnailUrl = `${TMDB_THUMBNAIL_URL}${poster_path}`;
  const roundedRate = vote_average.toFixed(1);

  return (
    <li onClick={onClick}>
      <div className="item">
        <img className="thumbnail" src={thumbnailUrl} alt={title} />
        <div className="item-desc">
          <p className="rate">
            <img src={starEmptyImage} className="star" alt="star" />
            <span>{roundedRate}</span>
          </p>
          <strong>{title}</strong>
        </div>
      </div>
    </li>
  );
}
