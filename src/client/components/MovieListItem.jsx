import React from 'react';
import starEmptyImage from '@images/star_empty.png';

function MovieListItem({ movie }) {
  return (
    <li onClick={() => alert(`You clicked on ${movie.title}`)} className="item">
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
