import React from 'react';
import {TMDB_THUMBNAIL_URL} from '../constants/constants';

export default function Movie({movie}) {
  return (
    <li>
      <div className="item">
        <img className="thumbnail" src={`${TMDB_THUMBNAIL_URL}${movie.poster_path}" alt="${movie.title}`} />
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
