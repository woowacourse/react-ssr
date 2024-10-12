import React from "react";
import MovieList from "./components/MovieList";

import MovieBanner from "./components/MovieBanner";
import Footer from "./components/Footer";

function App({ movies }) {
  const bannerMovie = movies[0];

  return (
    <div id="wrap">
      <header>
        <MovieBanner movie={bannerMovie} />
      </header>
      <div className="container">
        <main>
          <section>
            <h2>지금 인기 있는 영화</h2>
            <MovieList movies={movies} />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
