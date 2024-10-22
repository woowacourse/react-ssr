import React from "react";
import { TMDB_THUMBNAIL_URL } from "../../server/constants";
import starEmptyImage from "@images/star_empty.png";
import { Link, useLocation } from "react-router-dom"; 
function MovieList({ movies }) {
  const location = useLocation();
  return (
    <>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={`/detail/${movie.id}`} 
            state={{ backgroundLocation: location }}
          >
        <div className="item" >
          <img className="thumbnail" src={`${TMDB_THUMBNAIL_URL}${movie.poster_path}`} alt={movie.title} />
          <div className="item-desc">
            <p className="rate">
              <img className="star" src={starEmptyImage}/>
              <span>{movie.vote_average.toFixed(1)}</span>
            </p>
            <strong>{movie.title}</strong>
          </div>
        </div>
        </Link>
        </li>
      ))}
      </>
  );
}

export default MovieList;