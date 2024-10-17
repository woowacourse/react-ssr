import React from 'react';
import starEmptyImage from '@images/star_empty.png';
import { useNavigate } from 'react-router-dom';

function MovieListItem({ movie }) {
  const navigate = useNavigate();
  return (
    <li onClick={() => navigate(`/detail/${movie.id}`)} className="item">
      <img className="thumbnail" src={movie.thumbnailUrl} alt={movie.title} />
      <div className="item-desc">
        <div className="rate">
          <img className="star" src={starEmptyImage} alt="" />
          <span>{movie.rate}</span>
        </div>
        <span>{movie.title}</span>
      </div>
    </li>
  );
}

export default MovieListItem;
