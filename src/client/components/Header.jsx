import React from "react";
import StarEmpty from "@images/star_empty.png";
import Logo from "@images/logo.png";
import { useNavigate } from "react-router-dom";
import { TMDB_BANNER_URL } from "../../apis/constants";

function Header({ bannerMovie }) {
  const bannerUrl = TMDB_BANNER_URL + bannerMovie.backdrop_path;
  const navigate = useNavigate();

  return (
    <header>
      <div
        className="background-container"
        style={{ backgroundImage: `url('${bannerUrl}')` }}
      >
        <div className="overlay" aria-hidden="true"></div>
        <div className="top-rated-container">
          <h1 className="logo">
            <img src={Logo} alt="MovieList" />
          </h1>
          <div className="top-rated-movie">
            <div className="rate">
              <img src={StarEmpty} className="star" />
              <span className="rate-value">
                {bannerMovie.vote_average.toFixed(1)}
              </span>
            </div>
            <div className="title">{bannerMovie.title}</div>
            <button
              className="primary detail"
              onClick={() => navigate(`/detail/${bannerMovie.id}`)}
            >
              자세히 보기
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
