import React from 'react';

import { TMDB_THUMBNAIL_URL } from '../constants.js';
import { round } from '../utils.js';
import StarEmptyImage from '@images/star_empty.png';
import { useNavigate } from 'react-router-dom';

function MovieItem(movie) {
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + '/' + movie.background;
  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className='item'>
      <img className='thumbnail' src={thumbnailFullUrl} alt={movie.title} onClick={() => handleMovieClick(movie.id)} />
      <div className='item-desc'>
        <p className='rate'>
          <img src={StarEmptyImage} className='star' />
          <span>{round(movie.rate, 1)}</span>
        </p>
        <strong>{movie.title}</strong>
      </div>
    </div>
  );
}

export default MovieItem;
