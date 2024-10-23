import React from "react";
import { TMDB_THUMBNAIL_URL } from "../../../constants/tmdb";
import round from "../../../utils/round";
import starEmpty from "@images/star_empty.png";
import { useNavigate } from "react-router-dom";

const MovieItem = ({ movie }) => {
  const navigate = useNavigate();

  const goMovieDetail = () => {
    navigate(`/detail/${movie.id}`);
  };

  return (
    <li>
      <div className="item" onClick={goMovieDetail}>
        <img className="thumbnail" src={`${TMDB_THUMBNAIL_URL}${movie.poster_path}`} alt={movie.title} />
        <div className="item-desc">
          <p className="rate">
            <img src={starEmpty} className="star" />
            <span>${round(movie.vote_average, 1)}</span>
          </p>
          <strong>${movie.title}</strong>
        </div>
      </div>
    </li>
  );
};

export default MovieItem;
