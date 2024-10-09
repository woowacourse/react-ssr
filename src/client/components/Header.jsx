import React from "react";
import { TMDB_THUMBNAIL_URL } from "../constants";

import logoImage from "@images/logo.png";
import starEmptyImage from "@images/star_empty.png";

export default function Header({ bestMovie }) {
  if (!bestMovie || bestMovie.length === 0) {
    return null;
  }

  const { poster_path, vote_average, title } = bestMovie;

  return (
    <header>
      <div
        className="background-container"
        style={{
          backgroundImage: `url('${TMDB_THUMBNAIL_URL}/${poster_path}')`,
        }}
      >
        <div className="overlay" aria-hidden="true"></div>
        <div className="top-rated-container">
          <h1 className="logo">
            <img src={logoImage} alt="MovieList" />
          </h1>
          <div className="top-rated-movie">
            <div className="rate">
              <img src={starEmptyImage} className="star" />
              <span className="rate-value">{vote_average.toFixed(1)}</span>
            </div>
            <div className="title">{title}</div>
            <button className="primary detail">자세히 보기</button>
          </div>
        </div>
      </div>
    </header>
  );
}
