import React from 'react';
import ModalButtonClose from '@images/modal_button_close.png';
import StarFilled from '@images/star_filled.png';

const MovieDetailModal = ({ movieDetail }) => {
  return (
    <div className='modal-background active' id='modalBackground'>
      <div className='modal'>
        <button className='close-modal' id='closeModal'>
          <img src={ModalButtonClose} />
        </button>
        <div className='modal-container'>
          <div className='modal-image'>
            <img src={movieDetail.poster_path} />
          </div>
          <div className='modal-description'>
            <h2>{movieDetail.title}</h2>
            <p className='category'>
              {movieDetail.releaseYear} · {movieDetail.genres.join(', ')}
            </p>
            <p className='rate'>
              <img src={StarFilled} className='star' />
              <span>7.7</span>
            </p>
            <hr />
            <p className='detail'>{movieDetail.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailModal;
