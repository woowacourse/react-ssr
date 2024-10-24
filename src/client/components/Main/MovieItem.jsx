import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import round from "../../../utils/round";
import starEmpty from "@images/star_empty.png";
import { getThumbnailUrl } from "../../../common/api/tmdb";
import { ROUTE } from "../../../common/routes";

export default function MovieItem({ movie }) {
  const { id, title, vote_average, poster_path } = movie;

  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(ROUTE.detail(id));
  };

  return (
    <li onClick={handleItemClick}>
      <div className="item">
        <img
          className="thumbnail"
          src={getThumbnailUrl({ poster_path })}
          alt={title}
        />
        <div className="item-desc">
          <p className="rate">
            <img src={starEmpty} className="star" />
            <span>{round(vote_average, 1)}</span>
          </p>
          <strong>{title}</strong>
        </div>
      </div>
    </li>
  );
}
