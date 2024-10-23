import React from 'react';

import { TMDB_THUMBNAIL_URL } from '../constants.js';
import { round } from '../utils.js';
import StarEmptyImage from '@images/star_empty.png';
import { useNavigate } from 'react-router-dom';

function MovieItem({ background, title, id, rate }) {
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + '/' + background;
  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className='item'>
      <img className='thumbnail' src={thumbnailFullUrl} alt={title} onClick={() => handleMovieClick(id)} />
      <div className='item-desc'>
        <p className='rate'>
          <img src={StarEmptyImage} className='star' />
          <span>{round(rate, 1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export default MovieItem;
