import { TMDB_BANNER_URL } from '../constants.js';
import { round } from '../utils';
import React from 'react'; // 왜 react import 없으면 안되는거지?

function Header({ movie }) {
  const { id, title, rate, background } = movie;

  const bannerUrl = TMDB_BANNER_URL + background;

  return (
    <header>
      <div className='background-container' style={{ backgroundImage: `url('${bannerUrl}')` }}>
        <div className='overlay' aria-hidden='true'></div>
        <div className='top-rated-container'>
          <h1 className='logo'>
            <img src='../assets/images/logo.png' alt='MovieList' />
          </h1>
          <div className='top-rated-movie'>
            <div className='rate'>
              <img src='../assets/images/star_empty.png' className='star' />{' '}
              <span className='rate-value'>{round(rate, 1)}</span>
            </div>
            <div className='title'>{title}</div>
            <button className='primary detail' onClick={() => alert('클릭')}>
              자세히 보기
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
