import React from 'react';
import StarEmptyImage from '@images/star_empty.png';
import LogoImage from '@images/logo.png';
import { TMDB_BANNER_URL } from '../../server/constants/movies';
import { useNavigate } from 'react-router-dom';

const Header = ({ bestMovie }) => {
  const navigate = useNavigate();

  const backgroundContainer = TMDB_BANNER_URL + '/' + bestMovie.backdrop_path;
  const bestMovieRate = bestMovie.vote_average.toFixed(1);
  const bestMovieTitle = bestMovie.title;

  return (
    <header>
      <div className='background-container' style={{ backgroundImage: `url(${backgroundContainer})` }}>
        <div className='overlay' aria-hidden='true'></div>
        <div className='top-rated-container'>
          <h1 className='logo'>
            <img src={LogoImage} alt='MovieList' />
          </h1>
          <div className='top-rated-movie'>
            <div className='rate'>
              <img src={StarEmptyImage} className='star' />
              <span className='rate-value'>{bestMovieRate}</span>
            </div>
            <div className='title'>{bestMovieTitle}</div>
            <button className='primary detail' onClick={() => navigate(`/detail/${bestMovie.id}`)}>
              자세히 보기
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
