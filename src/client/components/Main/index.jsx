import React from "react";
import MovieList from "./MovieList";

export default function Main({ movies }) {
  return (
    <div className="container">
      <main>
        <section>
          <h2>지금 인기 있는 영화</h2>
          <MovieList movies={movies} />
        </section>
      </main>
    </div>
  );
}
