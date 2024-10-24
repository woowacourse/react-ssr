import React from 'react';
import starEmptyImage from '@images/star_empty.png';
import { TMDB_THUMBNAIL_URL } from '../../server/constants/movies.js';
import { useNavigate } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  const navigate = useNavigate();

  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + '/' + movie.poster_path;
  const movieRating = movie.vote_average.toFixed(1);

  return (
    <li>
      <div className='item' onClick={() => navigate(`/detail/${movie.id}`)}>
        <img src={thumbnailFullUrl} className='thumbnail' alt={movie.title + '이미지'} />
        <div className='item-desc'>
          <p className='rate'>
            <img src={starEmptyImage} className='star' alt='평점' />
            <span>{movieRating}</span>
          </p>
          <strong>{movie.title}</strong>
        </div>
      </div>
    </li>
  );
};

export default MovieItem;
