import React from 'react';

import { round } from '../../utils';
import { TMDB_THUMBNAIL_URL } from '../src/constants.js';

function MovieItem({ title, thumbnailUrl, rate }) {
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + '/' + thumbnailUrl;

  return (
    <div className='item'>
      <img className='thumbnail' src={thumbnailFullUrl} alt={title} />
      <div className='item-desc'>
        <p className='rate'>
          <img src={'../assets/images/star_empty.png'} className='star' />
          <span>{round(rate)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export default MovieItem;
