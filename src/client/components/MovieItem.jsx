import React from "react";
import { round } from "../../utils/round.js";
import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => {
  const TMDB_THUMBNAIL_URL =
    "https://media.themoviedb.org/t/p/w440_and_h660_face/";

  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + "/" + movie.poster_path;
  return (
    <Link to={`/detail/${movie.id}`}>
      <li className='item'>
        <img className='thumbnail' src={thumbnailFullUrl} alt={movie.title} />
        <div className='item-desc'>
          <div className='rate'>
            <img className='star' src='/static/images/star_empty.png' alt='' />
            <span>{round(movie.vote_average)}</span>
          </div>
          <span>{movie.title}</span>
        </div>
      </li>
    </Link>
  );
};

export default MovieItem;
