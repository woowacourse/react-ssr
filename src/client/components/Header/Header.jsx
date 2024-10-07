import React from "react";
import { TMDB_BANNER_URL } from "../../../server/constants";

function Header({ bestMovie }) {
  return (
    <header>
      <div className="background-container" style={{ backgroundImage: `url(${TMDB_BANNER_URL + bestMovie.backdrop_path})` }}>
        <div className="overlay" aria-hidden="true"></div>
        <div className="top-rated-container">
          <h1 className="logo">
            <img src="../assets/images/logo.png" alt="MovieList" />
          </h1>
          <div className="top-rated-movie">
            <div className="rate">
              <img src="../assets/images/star_empty.png" className="star" alt="Star" />
              <span className="rate-value">{bestMovie.rate}</span>
            </div>
            <div className="title">{bestMovie.title}</div>
            <button className="primary detail">자세히 보기</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;