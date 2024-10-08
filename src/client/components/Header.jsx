import React from "react";

const Header = ({ bestMovie }) => {
  const backgroundContainerUrl =
    "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/" +
    bestMovie.poster_path;

  return (
    <header>
      <div
        className="background-container"
        style={{ backgroundImage: `url(${backgroundContainerUrl})` }}
      >
        <div className="overlay" aria-hidden="true"></div>
        <div className="top-rated-container">
          <h1 className="logo">
            <img src="../assets/images/logo.png" alt="MovieList" />
          </h1>
          <div className="top-rated-movie">
            <div className="rate">
              <img src="../assets/images/star_empty.png" className="star" />
              <span className="rate-value">
                {bestMovie.vote_average.toFixed(1)}
              </span>
            </div>
            <div className="title">{bestMovie.title}</div>
            <button
              className="primary detail"
              onClick={() => console.log(click)}
            >
              자세히 보기
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
