import React from "react";

import MovieItem from "./MovieItem";
import { useNavigate } from "react-router-dom";
import { MOVIE_PAGE_PATH } from "../../../common/constants/path";

export default function MovieList({ movies }) {
  const navigate = useNavigate();
  const routerToMovieDetailModal = (id) => {
    navigate(MOVIE_PAGE_PATH.movieDetailById(id));
  };

  return (
    <div className="container">
      <main>
        <section>
          <h2>지금 인기 있는 영화</h2>
          <ul className="thumbnail-list">
            {movies.map((movie) => (
              <MovieItem
                key={movie.id}
                onClick={() => routerToMovieDetailModal(movie.id)}
                {...movie}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
