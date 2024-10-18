import React from "react";
import StarEmpty from "@images/star_empty.png";
import { useNavigate } from "react-router-dom";

const TMDB_THUMBNAIL_URL =
  "https://media.themoviedb.org/t/p/w440_and_h660_face/";

function MovieItem({ movie }) {
  const navigate = useNavigate();

  const { id, vote_average, title, poster_path } = movie;
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + poster_path;

  return (
    <div className="item" onClick={() => navigate(`/detail/${id}`)}>
      <img className="thumbnail" src={thumbnailFullUrl} alt={title} />
      <div className="item-desc">
        <p className="rate">
          <img src={StarEmpty} className="star" />
          <span>{vote_average.toFixed(1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export default MovieItem;
