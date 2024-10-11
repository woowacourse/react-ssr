import React from "react";

import LogoImage from "@images/logo.png";
import StarEmptyImage from "@images/star_empty.png";

export default function Header({ movie }) {
  const { backdropPath, rate, title } = movie;

  return (
    <div
      className="background-container"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="overlay" aria-hidden="true"></div>
      <div className="top-rated-container">
        <h1 className="logo">
          <img src={LogoImage} alt="MovieList" />
        </h1>
        <div className="top-rated-movie">
          <div className="rate">
            <img src={StarEmptyImage} alt="별점 이미지" className="star" />{" "}
            <span className="rate-value">{rate}</span>
          </div>
          <div className="title">{title}</div>
          <button type="button" className="primary detail">
            자세히 보기
          </button>
        </div>
      </div>
    </div>
  );
}
