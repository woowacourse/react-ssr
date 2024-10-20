import React from 'react';
import {TMDB_ORIGINAL_URL} from '../constants/constants';
import {useNavigate} from 'react-router-dom';

export default function Modal({movieDetail}) {
  const navigate = useNavigate();

  return (
    <div className="modal-background active" id="modalBackground">
      <div className="modal">
        <button className="close-modal" id="closeModal" onClick={() => navigate('/')}>
          <img src="/static/images/modal_button_close.png" />
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <img src={`${TMDB_ORIGINAL_URL}${movieDetail.poster_path}`} />
          </div>
          <div className="modal-description">
            <h2>{movieDetail.title}</h2>
            <p className="category">
              {movieDetail.release_date.split('-')[0]} · {movieDetail.genres.map(({name}) => name).join(', ')}
            </p>
            <p className="rate">
              <img src="/static/images/star_filled.png" className="star" />
              <span>{movieDetail.vote_average.toFixed(1)}</span>
            </p>
            <hr />
            <p className="detail">{movieDetail.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
