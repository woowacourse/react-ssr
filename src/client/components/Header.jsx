import React from "react";
import { useNavigate } from "react-router-dom";

import logoImage from "@images/logo.png";
import starEmptyImage from "@images/star_empty.png";

export default function Header({ bestMovie }) {
  const navigate = useNavigate();

  if (!bestMovie || bestMovie.length === 0) {
    return null;
  }

  const { id, backdrop_path, vote_average, title } = bestMovie;

  return (
    <header>
      <div
        className="background-container"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path})`,
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
            <button
              className="primary detail"
              onClick={() => navigate(`/detail/${id}`)}
            >
              자세히 보기
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
