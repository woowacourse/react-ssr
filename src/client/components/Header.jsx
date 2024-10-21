import { TMDB_BANNER_URL } from "../constants.js";
import logoImg from "@images/logo.png";
import starEmptyImg from "@images/star_empty.png";
import React from "react";
import { round } from "../utils";

function Header({ movie, onMovieClick }) {
  const { id, title, vote_average, backdrop_path } = movie;
  const bannerUrl = TMDB_BANNER_URL + backdrop_path;

  const handleClick = (e) => {
    e.preventDefault();
    onMovieClick(id);
  };

  return (
    <header>
      <div className="background-container" style={{ backgroundImage: `url('${bannerUrl}')` }}>
        <div className="overlay" aria-hidden="true"></div>
        <div className="top-rated-container">
          <h1 className="logo">
            <img src={logoImg} alt="MovieList" />
          </h1>
          <div className="top-rated-movie">
            <div className="rate">
              <img src={starEmptyImg} className="star" alt="Star rating" />
              <span className="rate-value">{round(vote_average, 1)}</span>
            </div>
            <div className="title">{title}</div>
            <a className="primary detail" href={`/detail/${id}`} onClick={handleClick}>
              자세히 보기
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
