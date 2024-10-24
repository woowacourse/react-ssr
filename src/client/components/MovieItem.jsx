import { TMDB_THUMBNAIL_URL } from "../../server/constants/constants";
import React from "react";
import round from "../utils/round.js";
import { useNavigate, useLocation } from "react-router-dom";

function MovieItem({ id, rate, title, thumbnailUrl }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMovieClick = (id) => {
    navigate(`/detail/${id}`, { state: { background: location } }); // 모달 열기
  };

  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + "/" + thumbnailUrl;

  return (
    <div className="item" onClick={() => handleMovieClick(id)}>
      <img className="thumbnail" src={thumbnailFullUrl} alt={title} />
      <div className="item-desc">
        <p className="rate">
          <img src="/static/images/star_empty.png" className="star" />
          <span>{round(rate, 1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export default MovieItem;
