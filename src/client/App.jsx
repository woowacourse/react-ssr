import React from "react";
import MovieList from "./components/MovieList";
import { TMDB_BANNER_URL } from "./constants";
import logo from "@images/logo.png";
import emptyStar from "@images/star_empty.png";
import woowacourseLogo from "@images/woowacourse_logo.png";

function App({ movies }) {
  const bannerMovie = movies[0];

  return (
    <div id="wrap">
      <header>
        <div
          className="background-container"
          style={{
            backgroundImage: `url(${`${TMDB_BANNER_URL}${bannerMovie.backdrop_path}`})`,
          }}
        >
          <div className="overlay" aria-hidden="true"></div>
          <div className="top-rated-container">
            <h1 className="logo">
              <img src={logo} alt="MovieList" />
            </h1>
            <div className="top-rated-movie">
              <div className="rate">
                <img src={emptyStar} className="star" />
                <span className="rate-value">{bannerMovie.vote_average.toFixed(1)}</span>
              </div>
              <div className="title">{bannerMovie.title}</div>
              <button className="primary detail">자세히 보기</button>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <main>
          <section>
            <h2>지금 인기 있는 영화</h2>
            <MovieList movies={movies} />
          </section>
        </main>
      </div>

      <footer className="footer">
        <p>&copy; 우아한테크코스 All Rights Reserved.</p>
        <p>
          <img src={woowacourseLogo} width="180" />
        </p>
      </footer>
    </div>
  );
}

export default App;
