import React from 'react';
import { TMDB_BANNER_URL } from '../../server/constants/constant';
import { round } from '../utils/round';

const Header = ({ bestMovieItem }) => {
  const { backdrop_path, vote_average, title } = bestMovieItem;
  const bannerUrl = TMDB_BANNER_URL + backdrop_path;

  return (
    <header>
      <div
        className='background-container'
        style={{ backgroundImage: `url('${bannerUrl}')` }}
      >
        <div className='overlay' aria-hidden='true'></div>
        <div className='top-rated-container'>
          <h1 className='logo'>
            <img src='../assets/images/logo.png' alt='MovieList' />
          </h1>
          <div className='top-rated-movie'>
            <div className='rate'>
              <img src='../assets/images/star_empty.png' className='star' />
              <span className='rate-value'>{round(vote_average, 1)}</span>
            </div>
            <div className='title'>{title}</div>
            <button className='primary detail'>자세히 보기</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
