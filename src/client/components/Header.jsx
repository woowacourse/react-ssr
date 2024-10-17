import React from 'react';
import { TMDB_THUMBNAIL_URL } from '../constants';
import logoPng from '@images/logo.png';
import starEmptyPng from '@images/star_empty.png';

export default function Header({ movie, onButtonClick }) {
  return (
    <header>
      <div
        className='background-container'
        style={{
          backgroundImage: `url(${TMDB_THUMBNAIL_URL}${movie.poster_path})`,
        }}
      >
        <div className='overlay' aria-hidden='true'></div>
        <div className='top-rated-container'>
          <h1 className='logo'>
            <img src={logoPng} alt='MovieList' />
          </h1>
          <div className='top-rated-movie'>
            <div className='rate'>
              <img src={starEmptyPng} className='star' />
              <span className='rate-value'>
                {movie.vote_average.toFixed(1)}
              </span>
            </div>
            <div className='title'>{movie.title}</div>
            <button className='primary detail' onClick={onButtonClick}>
              자세히 보기
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
