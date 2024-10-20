import React from "react";

import Header from "../components/Header";
import MovieItem from "../components/MovieItem";
import Footer from "../components/Footer";

const MainPage = ({ movies }) => {
  return (
    <div id="wrap">
      <Header bestMovie={movies[0]} />
      <div className="container">
        <main>
          <section>
            <h2>지금 인기 있는 영화</h2>
            <ul className="thumbnail-list">
              {movies.map((movie) => (
                <MovieItem
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </ul>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
