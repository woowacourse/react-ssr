import { TMDB_BANNER_URL } from "../constants.js";
import logoImg from "@images/logo.png";
import starEmptyImg from "@images/star_empty.png";
import React from "react";
import { round } from "../utils";

function Header({ movie }) {
  const { id, title, vote_average, backdrop_path } = movie;

  const bannerUrl = TMDB_BANNER_URL + backdrop_path;

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
              <img src={starEmptyImg} className="star" />
              <span className="rate-value">{round(vote_average, 1)}</span>
            </div>
            <div className="title">{title}</div>
            <button className="primary detail" onClick={() => alert("Clicked")}>
              자세히 보기
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
