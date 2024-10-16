import React from "react";
import { round } from "../utils";
import { TMDB_THUMBNAIL_URL } from "../constants";
import starEmptyImage from "@images/star_empty.png";
import { useNavigate } from "react-router-dom";

function MovieItem({ id, rate, title, thumbnailUrl, onClick }) {
  const navigate = useNavigate();

  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + "/" + thumbnailUrl;

  const handleMovieItemClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="item" onClick={handleMovieItemClick}>
      <img className="thumbnail" src={thumbnailFullUrl} alt={title} />
      <div className="item-desc">
        <p className="rate">
          <img src={starEmptyImage} className="star" alt="" />
          <span>{round(rate, 1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export default MovieItem;
