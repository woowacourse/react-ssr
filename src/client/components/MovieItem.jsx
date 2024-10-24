import React from 'react';
import { round } from '../utils/round';
import StarEmptyImage from '@images/star_empty.png';
import { TMDB_THUMBNAIL_URL } from '../../constants/constant';
import { useNavigate } from 'react-router-dom';

const MovieItem = ({ movieItem, handleModal }) => {
  const navigate = useNavigate();
  const { id, title, poster_path, vote_average } = movieItem;

  const handleMovieItemClick = () => {
    navigate(`/detail/${id}`);
    handleModal();
  };

  return (
    <li>
      <div className='item' onClick={handleMovieItemClick}>
        <img
          className='thumbnail'
          src={`${TMDB_THUMBNAIL_URL}${poster_path}`}
          alt='${title}'
        />
        <div className='item-desc'>
          <p className='rate'>
            <img src={StarEmptyImage} className='star' />
            <span>{round(vote_average, 1)}</span>
          </p>
          <strong>{title}</strong>
        </div>
      </div>
    </li>
  );
};

export default MovieItem;
