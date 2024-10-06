import React from 'react';

export default function Header({ movie }) {
  return (
    <header>
      <div
        className="background-container"
        style={{ backgroundImage: `url(${movie.backdropUrl})` }}
      >
        <div className="overlay" aria-hidden="true"></div>
        <div className="top-rated-container">
          <h1 className="logo">
            <img src="../assets/images/logo.png" alt="MovieList" />
          </h1>
          <div className="top-rated-movie">
            <div className="rate">
              <img src="../assets/images/star_empty.png" className="star" alt="Star rating" />
              <span className="rate-value">{movie.rate}</span>
            </div>
            <div className="title">{movie.title}</div>
            <button className="primary detail">자세히 보기</button>
          </div>
        </div>
      </div>
    </header>
  );
}
