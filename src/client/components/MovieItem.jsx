import React from "react";
import { TMDB_THUMBNAIL_URL } from "../constants.js";
import starEmptyImage from "@images/star_empty.png";
import round from "../util/round.js";
import { useNavigate } from "react-router-dom";

const MovieItem = ({ id, posterUrl, title, voteAverage }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <button className="item" onClick={handleClick}>
      <img
        className="thumbnail"
        src={`${TMDB_THUMBNAIL_URL}${posterUrl}`}
        alt={`${title}`}
      />
      <div className="item-desc">
        <p className="rate">
          <img src={starEmptyImage} className="star" alt="" />
          <span>{round(voteAverage)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </button>
  );
};

export default MovieItem;
