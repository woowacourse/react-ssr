import React from 'react';
import { TMDB_THUMBNAIL_URL } from '../constants';
import startEmptyPng from '../../../public/images/star_empty.png';


export default function MovieThumbnail({ movie, onClick }) {
  return (
    <li onClick={onClick}>
      <div className='item'>
        <img
          className='thumbnail'
          src={`${TMDB_THUMBNAIL_URL}${movie.poster_path}`}
          alt={movie.title}
        />
        <div className='item-desc'>
          <p className='rate'>
            <img src={startEmptyPng} className='star' />
            <span>{movie.vote_average.toFixed(1)}</span>
          </p>
          <strong>{movie.title}</strong>
        </div>
      </div>
    </li>
  );
}
