import React from 'react';
import StarEmpty from '@images/star_empty.png';
import Logo from '@images/logo.png';

import { round } from '../utils/round';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../router/routes';

const TMDB_BANNER_URL =
  'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';

export default function Header({ bannerMovie }) {
  const movie = bannerMovie ?? {
    id: -1,
    title: '',
    bannerUrl: '',
    vote_average: 0,
  };

  const { id, title, vote_average: rate, backdrop_path: bannerImgUrl } = movie;
  const bannerUrl = TMDB_BANNER_URL + bannerImgUrl;

  const navigate = useNavigate();
  const moveToDetail = () => {
    navigate(ROUTES.movieDetail(id));
  };

  return (
    <header>
      <div
        className="background-container"
        style={{ backgroundImage: `url('${bannerUrl}')` }}
      >
        <div className="overlay" aria-hidden="true"></div>
        <div className="top-rated-container">
          <h1 className="logo">
            <img src={Logo} alt="MovieList" />
          </h1>
          <div className="top-rated-movie">
            <div className="rate">
              <img src={StarEmpty} className="star" />{' '}
              <span className="rate-value">{round(rate, 1)}</span>
            </div>
            <div className="title">{title}</div>
            <button className="primary detail" onClick={moveToDetail}>
              자세히 보기
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
