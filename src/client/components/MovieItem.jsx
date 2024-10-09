import React from 'react';
import { round } from '../utils/round';
import { TMDB_THUMBNAIL_URL } from '../../server/constants/constant';
import StarEmptyImage from '@images/star_empty.png';

const MovieItem = ({ movieItem }) => {
  const { id, title, poster_path, vote_average } = movieItem;
  return (
    <li>
      <a href={`/detail/${id}`}>
        <div className='item'>
          <img
            className='thumbnail'
            src={`${TMDB_THUMBNAIL_URL}${poster_path}`}
            alt='${title}'
          />
          <div className='item-desc'>
            <p className='rate'>
              <img src={StarEmptyImage} className='star' />
              <span>{round(vote_average, 1)}</span>
            </p>
            <strong>{title}</strong>
          </div>
        </div>
      </a>
    </li>
  );
};

export default MovieItem;
