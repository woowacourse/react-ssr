import React from 'react';

export default function Header({ rate, title, backgroundContainer }) {
  return (
    <header>
      <div
        className="background-container"
        style={{ backgroundImage: `url(${backgroundContainer})` }}
      >
        <div className="overlay" aria-hidden="true"></div>
        <div className="top-rated-container">
          <h1 className="logo">
            <img src="/images/logo.png" alt="MovieList" />
          </h1>
          <div className="top-rated-movie">
            <div className="rate">
              <img src="/images/star_empty.png" className="star" />
              <span className="rate-value">{rate}</span>
            </div>
            <div className="title">{title}</div>
            <button className="primary detail">자세히 보기</button>
          </div>
        </div>
      </div>
    </header>
  );
}
