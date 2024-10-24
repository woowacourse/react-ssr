import React from 'react';
import {TMDB_THUMBNAIL_URL} from '../constants/constants';
import {useNavigate} from 'react-router-dom';

export default function Movie({movie}) {
  const navigate = useNavigate();

  const handleClickDetail = () => {
    navigate(`/detail/${movie.id}`);
  };

  return (
    <li>
      <div className="item" onClick={handleClickDetail}>
        <img className="thumbnail" src={`${TMDB_THUMBNAIL_URL}${movie.poster_path}`} alt={movie.title} />
        <div className="item-desc">
          <p className="rate">
            <img src="/static/images/star_empty.png" className="star" />
            <span>{movie.vote_average.toFixed(1)}</span>
          </p>
          <strong>{movie.title}</strong>
        </div>
      </div>
    </li>
  );
}
