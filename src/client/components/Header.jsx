import React from 'react';
import {TMDB_BANNER_URL} from '../../constants/constants';

export default function Header({movies}) {
  return (
    <header>
      <div
        class="background-container"
        style={{backgroundImage: `url("${TMDB_BANNER_URL}${movies[0].backdrop_path}")`}}
      >
        <div class="overlay" aria-hidden="true"></div>
        <div class="top-rated-container">
          <h1 class="logo">
            <img src="/static/images/logo.png" alt="MovieList" />
          </h1>
          <div class="top-rated-movie">
            <div class="rate">
              <img src="/static/images/star_empty.png" class="star" />
              <span class="rate-value">{movies[0].vote_average.toFixed(1)}</span>
            </div>
            <div class="title">{movies[0].title}</div>
            <button class="primary detail">자세히 보기</button>
          </div>
        </div>
      </div>
    </header>
  );
}
