import React from 'react';
import { TMDB_BANNER_URL } from '../../server/constants/movies';

const Header = ({ bestMovie }) => {
  const backgroundContainer = TMDB_BANNER_URL + '/' + bestMovie.backdrop_path;
  const bestMovieRate = bestMovie.vote_average.toFixed(1);
  const bestMovieTitle = bestMovie.title;

  return (
    <header>
      <div className='background-container' style={{ backgroundImage: `url(${backgroundContainer})` }}>
        <div className='overlay' aria-hidden='true'></div>
        <div className='top-rated-container'>
          <h1 className='logo'>
            <img src='../assets/images/logo.png' alt='MovieList' />
          </h1>
          <div className='top-rated-movie'>
            <div className='rate'>
              <img src='../assets/images/star_empty.png' className='star' />
              <span className='rate-value'>${bestMovieRate}</span>
            </div>
            <div className='title'>${bestMovieTitle}</div>
            <button className='primary detail'>자세히 보기</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
