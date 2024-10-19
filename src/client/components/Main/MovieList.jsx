import React from "react";
import round from "../../../utils/round";
import starEmpty from "@images/star_empty.png";
import { useNavigate } from "react-router-dom";
import { getThumbnailUrl } from "../../../common/api/tmdb";

export default function MovieList({ movies }) {
  const navigate = useNavigate();

  return (
    <ul id="movie-list" className="thumbnail-list">
      {movies.map(({ id, title, vote_average, poster_path }) => (
        <li
          key={id}
          onClick={() => {
            console.log(id);
            navigate(`/detail/${id}`);
          }}
        >
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
      ))}
    </ul>
  );
}
