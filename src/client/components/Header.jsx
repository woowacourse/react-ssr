import React from "react";

import { TMDB_BANNER_URL } from "../../server/api/endpoints";

const Header = ({ movie }) => {
  return (
    <header>
      <div
        className="background-container"
        style={{ backgroundImage: `url(${TMDB_BANNER_URL}${movie.backdrop_path})` }}
      >
        <div className="overlay" aria-hidden="true"></div>
        <div className="top-rated-container">
          <h1 className="logo">
            <img src="../assets/images/logo.png" alt="MovieList" />
          </h1>
          <div className="top-rated-movie">
            <div className="rate">
              <img src="../assets/images/star_empty.png" className="star" />
              <span className="rate-value">{movie.vote_average}</span>
            </div>
            <div className="title">{movie.title}</div>
            <button className="primary detail">자세히 보기</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
