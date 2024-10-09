import React from "react";
import { TMDB_BANNER_URL } from "../../../constants/tmdb.jsx";
import round from "../../../utils/round.js";

const TopRatedMovieView = ({ movie }) => {
  const bannerUrl = TMDB_BANNER_URL + movie.backdrop_path;

  return (
    <div className="background-container" style={{ backgroundImage: `url(${bannerUrl})` }}>
      <div className="overlay" aria-hidden="true"></div>
      <div className="top-rated-container">
        <h1 className="logo">
          <img src="../assets/images/logo.png" alt="MovieList" />
        </h1>
        <div className="top-rated-movie">
          <div className="rate">
            <img src="../assets/images/star_empty.png" className="star" />
            <span className="rate-value">${round(movie.vote_average, 1)}</span>
          </div>
          <div className="title">${movie.title}</div>
          <button className="primary detail">자세히 보기</button>
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovieView;
