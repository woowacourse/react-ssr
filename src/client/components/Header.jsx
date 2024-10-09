import React from 'react';
import { TMDB_BANNER_URL } from '../../server/src/constants';
import { formatVoteAverageString } from '../../server/src/utils';
import logoImage from '@images/logo.png';
import starEmptyImage from '@images/star_empty.png';

const Header = ({ movie }) => {
  const { title, vote_average: voteAverage, backdrop_path: backdropPath } = movie;
  const bannerUrl = `${TMDB_BANNER_URL}${backdropPath}`;

  return (
    <header>
      <div className='background-container' style={{ backgroundImage: `url(${bannerUrl})` }}>
        <div className='overlay' aria-hidden='true'></div>
        <div className='top-rated-container'>
          <h1 className='logo'>
            <img src={logoImage} alt='MovieList' />
          </h1>
          <div className='top-rated-movie'>
            <div className='rate'>
              <img src={starEmptyImage} className='star' alt='Star rating' />
              <span className='rate-value'>{formatVoteAverageString(voteAverage)}</span>
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
