import MovieThumbnail from "./MovieThumbnail.jsx";
import React from "react";
import { TMDB_THUMBNAIL_URL } from "../constants.js";

import logoPng from "@images/logo.png";
import starEmptyPng from "@images/star_empty.png";
import woowacourseLogo from "@images/woowacourse_logo.png";

function Home({ movies }) {
  const bestMovie = movies[0] || {};
  return (
    <>
      <header>
        <div
          className="background-container"
          style={{
            backgroundImage: `url(${TMDB_THUMBNAIL_URL}${bestMovie.poster_path})`,
          }}
        >
          <div className="overlay" aria-hidden="true"></div>
          <div className="top-rated-container">
            <h1 className="logo">
              <img src={logoPng} alt="MovieList" />
            </h1>
            <div className="top-rated-movie">
              <div className="rate">
                <img src={starEmptyPng} className="star" />
                <span className="rate-value">{bestMovie.vote_average.toFixed(1)}</span>
              </div>
              <div className="title">{bestMovie.title}</div>
              <button className="primary detail">자세히 보기</button>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        {/* <ul className='tab'>
          <li>
            <a href='/now-playing'>
              <div className='tab-item'>
                <h3>상영 중</h3>
              </div>
            </a>
          </li>
          <li>
            <a href='/popular'>
              <div className='tab-item'>
                <h3>인기순</h3>
              </div>
            </a>
          </li>
          <li>
            <a href='/top-rated'>
              <div className='tab-item'>
                <h3>평점순</h3>
              </div>
            </a>
          </li>
          <li>
            <a href='/upcoming'>
              <div className='tab-item'>
                <h3>상영 예정</h3>
              </div>
            </a>
          </li>
        </ul> */}
        <main>
          <section>
            <h2>지금 인기 있는 영화</h2>
            <ul className="thumbnail-list">
              {movies.map((movie) => {
                return <MovieThumbnail key={movie.id} movie={movie} />;
              })}
            </ul>
          </section>
        </main>
      </div>

      <footer className="footer">
        <p>&copy; 우아한테크코스 All Rights Reserved.</p>
        <p>
          <img src={woowacourseLogo} width="180" />
        </p>
      </footer>
    </>
  );
}

export default Home;
