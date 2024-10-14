import React from "react";
import { TMDB_THUMBNAIL_URL } from "../../apis/constants";

function MovieItem({ id, title, poster_path, vote_average = 0 }) {
  return (
    <a href={`/detail/${id}`}>
      <div className="item">
        <img
          className="thumbnail"
          src={`${TMDB_THUMBNAIL_URL}${poster_path}`}
          alt={title}
        />
        <div className="item-desc">
          <p className="rate">
            <img src="../assets/images/star_empty.png" className="star" />
            <span>{Number(vote_average).toFixed(1)}</span>
          </p>
          <strong>{title}</strong>
        </div>
      </div>
    </a>
  );
}

export default MovieItem;
