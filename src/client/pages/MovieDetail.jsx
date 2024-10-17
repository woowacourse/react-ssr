import React from 'react';
import CloseButtonImage from '@images/modal_button_close.png';
import StarEmptyImage from '@images/star_empty.png';
import { useNavigate } from 'react-router-dom';

const MovieDetail = ({ detail }) => {
  const navigate = useNavigate();

  const bannerUrl = TMDB_ORIGINAL_URL + detail.poster_path;
  const releaseYear = detail.release_date.split('-')[0];
  const genres = detail.genres.map((genre) => genre.name).join(', ');

  return (
    <div classNameName='modal-background active' id='modalBackground' onClick={() => navigate('/')}>
      <div classNameName='modal'>
        <button className='close-modal' id='closeModal' onClick={() => navigate('/')}>
          <img src={CloseButtonImage} />
        </button>
        <div classNameName='modal-container'>
          <div className='modal-image'>
            <img src={bannerUrl} />
          </div>
          <div className='modal-description'>
            <h2>${detail.title}</h2>
            <p className='category'>
              ${releaseYear} · ${genres}
            </p>
            <p className='rate'>
              <img src={StarEmptyImage} className='star' />
              <span>${detail.vote_average}</span>
            </p>
            <hr />
            <p className='detail'>${detail.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
