import React from 'react';
import { Link } from 'react-router-dom';
import { TMDB_THUMBNAIL_URL } from '../constants';

function MovieItem({ movie }) {
  const { id, title, poster_path, vote_average } = movie;

  return (
    <Link to={`/detail/${id}`}>
      <li className="item">
        <img className="thumbnail" src={TMDB_THUMBNAIL_URL + poster_path} alt={title} />
        <div className="item-desc">
          <p className="rate">
            <img src="/static/images/star_empty.png" className="star" alt="star" />
            <span>{vote_average.toFixed(1)}</span>
          </p>
          <strong>{title}</strong>
        </div>
      </li>
    </Link>
  );
}

export default MovieItem;
