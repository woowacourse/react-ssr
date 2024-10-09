import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movieList }) => {
  return (
    <div class="container">
      <main>
        <section>
          <h2>지금 인기 있는 영화</h2>
          <ul class="thumbnail-list">
            {movieList.map((movie) => {
              return <MovieItem movie={movie} />;
            })}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MovieList;
