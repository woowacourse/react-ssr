import React from "react";

import Header from "../components/Header";
import MovieList from "../components/MovieList";

export default function MoviePage({ movies }) {
  return (
    <>
      <Header bestMovie={movies[0]} />
      <div className="container">
        <main>
          <section>
            <h2>지금 인기 있는 영화</h2>
            <MovieList movies={movies} />
          </section>
        </main>
      </div>
    </>
  );
}
