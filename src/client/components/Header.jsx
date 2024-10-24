import React from "react";
import logo from "@images/logo.png";
import starEmpty from "@images/star_empty.png";
import { getBackgroundImageUrl } from "../../common/api/tmdb";
import round from "../../utils/round";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../common/routes";

export default function Header({ movie }) {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(ROUTE.detail(movie.id));
  };

  return (
    <header>
      <div
        className="background-container"
        style={{ backgroundImage: `url(${getBackgroundImageUrl(movie)})` }}
      >
        <div className="overlay" aria-hidden="true"></div>
        <div className="top-rated-container">
          <h1 className="logo">
            <img src={logo} alt="MovieList" />
          </h1>
          <div className="top-rated-movie">
            <div className="rate">
              <img src={starEmpty} className="star" />
              <span className="rate-value">{round(movie.vote_average, 1)}</span>
            </div>
            <div className="title">{movie.title}</div>
            <button className="primary detail" onClick={handleItemClick}>
              자세히 보기
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
