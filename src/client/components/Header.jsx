import React from "react";
import { TMDB_BANNER_URL } from "../constants.js";
import starEmptyImage from "@images/star_empty.png";
import logoImage from "@images/logo.png";
import round from "../util/round.js";


const Header = ({ movie }) => {
  return (
    <header id="header">
      <div
        className="background-container"
        style={{
          backgroundImage: `url(${TMDB_BANNER_URL}${movie.backdrop_path}`,
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
              <span className="rate-value">{round(movie.vote_average)}</span>
            </div>
            <div className="title">{movie.title}</div>
            <a className="primary detail" href={`/detail/${movie.id}`}>
              자세히 보기
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
