import React from 'react';

// import { StarEmpty } from '../imageResource.js';
import { StarEmpty } from '../../../public/images/star_empty.png';
import { TMDB_THUMBNAIL_URL } from '../constants.js';
import { round } from '../utils.js';

function MovieItem({ rate, title, background }) {
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + '/' + background;

  return (
    <div className='item'>
      <img className='thumbnail' src={thumbnailFullUrl} alt={title} />
      <div className='item-desc'>
        <p className='rate'>
          <img src='../assets/images/star_empty.png' className='star' />
          <span>{round(rate, 1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export default MovieItem;
