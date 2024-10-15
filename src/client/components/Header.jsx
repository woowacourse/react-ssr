import React from "react";
import StarEmpty from "@images/star_empty.png";
import Logo from "@images/logo.png";

const TMDB_BANNER_URL =
  "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/";

function Header({ bannerMovie }) {
  const movie = bannerMovie ?? {
    id: -1,
    title: "",
    bannerUrl: "",
    vote_average: 0,
  };

  const { id, title, vote_average: rate, backdrop_path: bannerImgUrl } = movie;

  const bannerUrl = TMDB_BANNER_URL + bannerImgUrl;

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
              <img src={StarEmpty} className="star" />{" "}
              <span className="rate-value">{rate.toFixed(1)}</span>
            </div>
            <div className="title">{title}</div>
            <button className="primary detail">자세히 보기</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
