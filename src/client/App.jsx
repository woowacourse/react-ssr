import React from "react";
import MovieList from "./components/MovieList";
import { TMDB_BANNER_URL } from "../constant";

import logoImage from "@images/logo.png";
import starEmptyImage from "@images/star_empty.png";
import woowacourseLogoImage from "@images/woowacourse_logo.png";

function App({ movies }) {
  const bestMovie = movies[0];

  return (
    <div id="wrap">
      <header>
        <div
          className="background-container"
          style={{ backgroundImage: `url(${TMDB_BANNER_URL}${bestMovie.backdrop_path})` }}
        >
          <div
            className="overlay"
            aria-hidden="true"
          ></div>
          <div className="top-rated-container">
            <h1 className="logo">
              <img
                src={logoImage}
                alt="MovieList"
              />
            </h1>
            <div className="top-rated-movie">
              <div className="rate">
                <img
                  src={starEmptyImage}
                  className="star"
                />
                <span className="rate-value">{bestMovie.vote_average}</span>
              </div>
              <div className="title">{bestMovie.title}</div>
              <button className="primary detail">자세히 보기</button>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <main>
          <section>
            <h2>지금 인기 있는 영화</h2>
            <ul className="thumbnail-list">
              <MovieList movies={movies} />
            </ul>
          </section>
        </main>
      </div>

      <footer className="footer">
        <p>&copy; 우아한테크코스 All Rights Reserved.</p>
        <p>
          <img
            src={woowacourseLogoImage}
            width="180"
          />
        </p>
      </footer>
    </div>
  );
}

export default App;
