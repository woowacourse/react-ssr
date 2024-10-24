import React from "react";
import { TMDB_THUMBNAIL_URL } from "../constants";
import emptyStar from "@images/star_empty.png";

export default function MovieItem({ movie }) {
  const { poster_path, vote_average, title } = movie;

  return (
    <div className="item">
      <img
        className="thumbnail"
        src={`${TMDB_THUMBNAIL_URL}/${poster_path}`}
        alt=""
      />
      <div className="item-desc">
        <p className="rate">
          <img src={emptyStar} className="star" />
          <span>{vote_average.toFixed(1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
}
