import React from 'react';

import { TMDB_THUMBNAIL_URL } from '../constants.js';
import { round } from '../utils.js';
import StarEmptyImage from '@images/star_empty.png';

function MovieItem({ rate, title, background }) {
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + '/' + background;

  return (
    <div className='item'>
      <img className='thumbnail' src={thumbnailFullUrl} alt={title} />
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
