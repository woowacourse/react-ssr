import React from 'react';
import { TMDB_BANNER_URL } from '../constants';

function Header({ bestMovie }) {
  const { title, backdrop_path, vote_average } = bestMovie;

  return (
    <header>
      <div
        className="background-container"
        style={{ backgroundImage: `url('${TMDB_BANNER_URL + backdrop_path}')` }}
      >
        <div className="overlay" aria-hidden="true"></div>
        <div className="top-rated-container">
          <h1 className="logo">
            <img src="/static/images/logo.png" alt="MovieList" />
          </h1>
          <div className="top-rated-movie">
            <div className="rate">
              <img src="/static/images/star_empty.png" className="star" />
              <span className="rate-value">{vote_average.toFixed(1)}</span>
            </div>
            <div className="title">{title}</div>
            <button className="primary detail">자세히 보기</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
