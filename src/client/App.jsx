import React from "react";
import MovieItem from "./components/MovieItem";

function App({ popularMovies }) {
  return (
    <div id="wrap">
      <header>
        <div
          className="background-container"
          style={{ backgroundImage: "url('${background-container}')" }}
        >
          <div className="overlay" aria-hidden="true"></div>
          <div className="top-rated-container">
            <h1 className="logo">
              <img src="../assets/images/logo.png" alt="MovieList" />
            </h1>
            <div className="top-rated-movie">
              <div className="rate">
                <img src="../assets/images/star_empty.png" className="star" />
                <span className="rate-value">{"bestMovie.rate"}</span>
              </div>
              <div className="title">{"bestMovie.title"}</div>
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
              <ul className="thumbnail-list">
                {popularMovies.results?.map(
                  ({ id, title, vote_average, poster_path }) => (
                    <li
                      key={id}
                      onClick={() => {
                        console.log("hello, world");
                      }}
                    >
                      <MovieItem
                        rate={vote_average}
                        title={title}
                        thumbnailUrl={poster_path}
                      />
                    </li>
                  )
                )}
              </ul>
            </ul>
          </section>
        </main>
      </div>

      <footer className="footer">
        <p>&copy; 우아한테크코스 All Rights Reserved.</p>
        <p>
          <img src="../assets/images/woowacourse_logo.png" width="180" />
        </p>
      </footer>
    </div>
  );
}

export default App;
