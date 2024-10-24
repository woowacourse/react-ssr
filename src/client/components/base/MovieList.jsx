import MovieItem from "./MovieItem";
import React from "react";
import { useNavigate } from "react-router-dom";

function MovieList({ movies }) {
  const navigate = useNavigate();

  return (
    <>
      {movies.length > 0 ? (
        <>
          {movies.map(({ id, title, vote_average, poster_path }) => (
            <li key={id}>
              <MovieItem
                onClick={() => navigate(`/detail/${id}`)}
                rate={vote_average}
                title={title}
                thumbnailUrl={poster_path}
              />
            </li>
          ))}
        </>
      ) : (
        <p>영화가 없어요</p>
      )}
    </>
  );
}

export default MovieList;
