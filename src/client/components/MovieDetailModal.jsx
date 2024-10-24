import React from 'react';
import { round } from '../../utils';
import starEmptyImage from '@images/star_empty.png';
import closeButtonImage from '@images/modal_button_close.png';
import { TMDB_ORIGINAL_URL } from '../src/constants';
import { useNavigate } from 'react-router-dom';

function MovieDetailModal({ movie }) {
  const navigate = useNavigate();

  const {
    title,
    poster_path: bannerUrl,
    release_date: releaseYear,
    genres,
    vote_average: rate,
    overview: description,
  } = movie;

  const onCloseButtonClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className='modal-background active' id='modalBackground'>
      <div className='modal'>
        <button
          className='close-modal'
          id='closeModal'
          onClick={onCloseButtonClick}
        >
          <img src={closeButtonImage} />
        </button>
        <div className='modal-container'>
          <div className='modal-image'>
            <img src={TMDB_ORIGINAL_URL + bannerUrl} />
          </div>
          <div className='modal-description'>
            <h2>{title}</h2>
            <p className='category'>
              {releaseYear} · {genres.map((el) => el.name).join(', ')}
            </p>
            <p className='rate'>
              <img src={starEmptyImage} className='star' />
              <span>{round(rate, 1)}</span>
            </p>
            <hr />
            <p className='detail'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailModal;
