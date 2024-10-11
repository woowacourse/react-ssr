import React from "react";
import { TMDB_BANNER_URL } from "../../server/constant";

const Header = ({ bestMovie }) => {
  const backgroundContainerUrl = TMDB_BANNER_URL + bestMovie.poster_path;

  return (
    <header>
      <div
        className="background-container"
        style={{ backgroundImage: `url(${backgroundContainerUrl})` }}
      >
        <div className="overlay" aria-hidden="true"></div>
        <div className="top-rated-container">
          <h1 className="logo">
            <img src="/static/images/logo.png" alt="MovieList" />
          </h1>
          <div className="top-rated-movie">
            <div className="rate">
              <img src="/static/images/star_empty.png" className="star" />
              <span className="rate-value">
                {bestMovie.vote_average.toFixed(1)}
              </span>
            </div>
            <div className="title">{bestMovie.title}</div>
            <button className="primary detail">자세히 보기</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
