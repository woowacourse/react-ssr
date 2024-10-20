import React from "react";
import MovieItem from "./MovieItem";
import MovieDetailModal from "./MovieDetailModal";

const MovieList = ({ movieList, detailMovie }) => {
  return (
    <div className="container">
      <main>
        <section>
          <h2>지금 인기 있는 영화</h2>
          <ul className="thumbnail-list">
            {movieList.map((movie) => {
              return <MovieItem movie={movie} key={movie.id} />;
            })}
          </ul>
        </section>
      </main>
      {/* {detailMovie && <MovieDetailModal detailMovie={detailMovie} />} */}
    </div>
  );
};

export default MovieList;
