import React from "react";
import { TMDB_BANNER_URL } from "../constants.js";
import starEmptyImage from "@images/star_empty.png";
import logoImage from "@images/logo.png";
import round from "../util/round.js";
import { Link } from "react-router-dom";

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
            <Link className="primary detail" to={`/detail/${movie.id}`}>
              자세히 보기
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
