import React from "react";

import { round } from "../../utils";
import { TMDB_BANNER_URL } from "../../constant/url";

function Header({ movie }) {
  const { title, vote_average, backdrop_path } = movie;
  const bannerUrl = TMDB_BANNER_URL + backdrop_path;

  return (
    <header>
      <div
        className="background-container"
        style={{ backgroundImage: `url('${bannerUrl}')` }}
      >
        <div className="overlay" aria-hidden="true"></div>
        <div className="top-rated-container">
          <h1 className="logo">
            <img src="../assets/images/logo.png" alt="MovieList" />
          </h1>
          <div className="top-rated-movie">
            <div className="rate">
              <img src="../assets/images/star_empty.png" className="star" />
              <span className="rate-value">{round(vote_average, 1)}</span>
            </div>
            <div className="title">{title}</div>
            {/* <Link to={`/detail/${id}`}> */}
            <button className="primary detail">자세히 보기</button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
