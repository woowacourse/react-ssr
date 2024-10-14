import React from "react";

export default function Header({ bestMovie }) {
  return (
    <header>
      <div
        className="background-container"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${bestMovie.backdropPath})`,
        }}
      >
        <div className="overlay" aria-hidden="true"></div>
        <div className="top-rated-container">
          <h1 className="logo">
            <img src="/static/images/logo.png" alt="MovieList" />
          </h1>
          <div className="top-rated-movie">
            <div className="rate">
              <img src="/static/images/star_empty.png" className="star" />
              <span className="rate-value">{bestMovie.rate}</span>
            </div>
            <div className="title">{bestMovie.title}</div>
            <button className="primary detail">자세히 보기</button>
          </div>
        </div>
      </div>
    </header>
  );
}
