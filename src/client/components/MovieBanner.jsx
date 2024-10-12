import React from "react";
import { TMDB_BANNER_URL } from "../constants";
import logo from "@images/logo.png";
import emptyStar from "@images/star_empty.png";

export default function MovieBanner({ movie }) {
  const { backdrop_path: backdropPath, vote_average: voteAverage, title } = movie;

  return (
    <div
      className="background-container"
      style={{
        backgroundImage: `url(${`${TMDB_BANNER_URL}${backdropPath}`})`,
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
            <span className="rate-value">{voteAverage.toFixed(1)}</span>
          </div>
          <div className="title">{title}</div>
          <button className="primary detail">자세히 보기</button>
        </div>
      </div>
    </div>
  );
}
