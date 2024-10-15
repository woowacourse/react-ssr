import React from "react";
import StarEmpty from "@images/star_empty.png";

const TMDB_THUMBNAIL_URL =
  "https://media.themoviedb.org/t/p/w440_and_h660_face/";

function MovieItem({ movie, onClick }) {
  const { vote_average: rate, title, poster_path: thumbnailUrl } = movie;
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + thumbnailUrl;

  return (
    <div className="item" onClick={() => onClick?.()}>
      <img className="thumbnail" src={thumbnailFullUrl} alt={title} />
      <div className="item-desc">
        <p className="rate">
          <img src={StarEmpty} className="star" />
          <span>{rate.toFixed(1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export default MovieItem;
