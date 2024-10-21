import React from "react";
import { TMDB_BANNER_URL } from "../../../server/constants";
import starEmptyImage from "@images/star_empty.png";
import logo from "@images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
function Header({ bestMovie }) {
  const navigate = useNavigate(); 
  const location = useLocation();

  const handleDetailClick = () => {
    navigate(`/detail/${bestMovie.id}`, {
      state: { backgroundLocation: location },
    });
  };
  return (
    <header>
      <div className="background-container" style={{ backgroundImage: `url(${TMDB_BANNER_URL + bestMovie.backdrop_path})` }}>
        <div className="overlay" aria-hidden="true"></div>
        <div className="top-rated-container">
          <h1 className="logo">
            <img src={logo} alt="MovieList" />
          </h1>
          <div className="top-rated-movie">
            <div className="rate">
              <img src={starEmptyImage} className="star" alt="Star" />
              <span className="rate-value">{bestMovie.vote_average.toFixed(1)}</span>
            </div>
            <div className="title">{bestMovie.title}</div>
            <button className="primary detail" onClick={handleDetailClick}>자세히 보기</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;