import { round } from "./MovieItem";
import { TMDB_BANNER_URL } from "../../server/constants/constants";
import React from "react";

function BestMovieSection({ bestMovie }) {
  const movie = bestMovie ?? {
    id: -1,
    title: "",
    bannerUrl: "",
    vote_average: 0,
  };

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
              <img src="../assets/images/star_empty.png" className="star" />{" "}
              <span className="rate-value">{round(vote_average, 1)}</span>
            </div>
            <div className="title">{title}</div>
            <button className="primary detail">자세히 보기</button>
         
          </div>
        </div>
      </div>
    </header>
  );
}

export default BestMovieSection;
