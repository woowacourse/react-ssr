import React from 'react';
import { TMDB_THUMBNAIL_URL } from '../../server/constants/movies.js';

const MovieItem = ({ movie }) => {
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + '/' + movie.poster_path;
  const movieRating = movie.vote_average.toFixed(1);

  return (
    <li>
      <div className='item'>
        <img src={thumbnailFullUrl} className='thumbnail' alt={movie.title + '이미지'} />
        <div className='item-desc'>
          <p className='rate'>
            <img src='../assets/images/star_empty.png' className='star' alt='평점' />
            <span>{movieRating}</span>
          </p>
          <strong>{movie.title}</strong>
        </div>
      </div>
    </li>
  );
};

export default MovieItem;
