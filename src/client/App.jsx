import React from "react";

import Header from "./components/Header.jsx";
import MovieList from "./components/MovieList.jsx";
import Footer from "./components/Footer.jsx";

const App = ({ nowPlayingMovies }) => {
  return (
    <>
      <Header movie={nowPlayingMovies[0]} />
      <div className="container">
        <main>
          <section>
            <h2>지금 인기 있는 영화</h2>
            <ul className="thumbnail-list">
              <MovieList movies={nowPlayingMovies} />
            </ul>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;
