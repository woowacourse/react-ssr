import React from 'react';

import { round } from '../../utils';
import { TMDB_THUMBNAIL_URL } from '../src/constants.js';
import starEmptyImage from '@images/star_empty.png';
import { Link } from 'react-router-dom';

function MovieItem({ id, title, thumbnailUrl, rate }) {
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + '/' + thumbnailUrl;

  return (
    <Link to={'/detail/' + id}>
      <div className='item'>
        <img className='thumbnail' src={thumbnailFullUrl} alt={title} />
        <div className='item-desc'>
          <p className='rate'>
            <img src={starEmptyImage} className='star' />
            <span>{round(rate)}</span>
          </p>
          <strong>{title}</strong>
        </div>
      </div>
    </Link>
  );
}

export default MovieItem;
