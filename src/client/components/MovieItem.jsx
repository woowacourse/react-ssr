import React from 'react';
import { round } from '../utils/round';

const MovieItem = ({ movieItem }) => {
  const { id, title, poster_path, vote_average } = movieItem;
  return (
    <li>
      <a href={`/detail/${id}`}>
        <div className='item'>
          <img
            className='thumbnail'
            src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`}
            alt='${title}'
          />
          <div className='item-desc'>
            <p className='rate'>
              <img src='../assets/images/star_empty.png' className='star' />
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
