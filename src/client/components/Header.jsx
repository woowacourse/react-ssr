import React from "react";
import { TMDB_BANNER_URL } from "../constants.js";
import starEmptyImage from "@images/star_empty.png";
import logoImage from "@images/logo.png";
import round from "../util/round.js";
import { useNavigate } from "react-router-dom";

const Header = ({ movie }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const id = movie.id;
    navigate(`/detail/${id}`);
  };

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
            <button className="primary detail" onClick={handleClick}>
              자세히 보기
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
