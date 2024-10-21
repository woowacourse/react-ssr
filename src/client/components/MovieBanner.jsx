import React from "react";
import { TMDB_BANNER_URL } from "../constants";
import logo from "@images/logo.png";
import emptyStar from "@images/star_empty.png";
import { Link } from "react-router-dom";

export default function MovieBanner({ popularMovie }) {
  const { id, backdrop_path, vote_average, title } = popularMovie;

  return (
    <div
      className="background-container"
      style={{
        backgroundImage: `url(${`${TMDB_BANNER_URL}${backdrop_path}`})`,
      }}
    >
      <div className="overlay" aria-hidden="true"></div>
      <div className="top-rated-container">
        <h1 className="logo">
          <img src={logo} alt="MovieList" />
        </h1>
        <div className="top-rated-movie">
          <div className="rate">
            <img src={emptyStar} className="star" />
            <span className="rate-value">{vote_average.toFixed(1)}</span>
          </div>
          <div className="title">{title}</div>
          <Link to={`/detail/${id}`}>
            <button className="primary detail">자세히 보기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
