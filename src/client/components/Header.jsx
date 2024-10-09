import React from 'react';
import { round } from '../../utils/round.js';

const Header = ({ movie }) => {
  const TMDB_BANNER_URL =
    'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';
  const bannerUrl = TMDB_BANNER_URL + movie.backdrop_path;

  return (
    <header>
      <div
        className='background-container'
        style={{ backgroundImage: `url(${bannerUrl})` }}
      >
        <div className='overlay' aria-hidden='true'></div>
        <div className='top-rated-container'>
          <h1 className='logo'>
            <img src='../assets/images/logo.png' alt='MovieList' />
          </h1>
          <div className='top-rated-movie'>
            <div className='rate'>
              <img
                src='../assets/images/star_empty.png'
                className='star'
                alt='Star rating'
              />
              <span className='rate-value'>{round(movie.vote_average)}</span>
            </div>
            <div className='title'>{movie.title}</div>
            <button className='primary detail'>자세히 보기</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
