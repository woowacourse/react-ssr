import React from 'react';
import { Link } from 'react-router-dom';
import { TMDB_THUMBNAIL_URL } from '../constants';

function Modal({ movieDetail }) {
  const { title, poster_path, release_date, genres, vote_average, overview } = movieDetail;

  return (
    <div className="modal-background active" id="modalBackground">
      <div className="modal">
        <Link to="/">
          <button className="close-modal" id="closeModal">
            <img src="/static/images/modal_button_close.png" />
          </button>
        </Link>
        <div className="modal-container">
          <div className="modal-image">
            <img src={TMDB_THUMBNAIL_URL + poster_path} />
          </div>
          <div className="modal-description">
            <h2>{title}</h2>
            <p className="category">
              {release_date.split('-')[0]} · {genres.map((genre) => genre.name).join(', ')}
            </p>
            <p className="rate">
              <img src="/static/images/star_filled.png" className="star" />
              <span>{vote_average.toFixed(1)}</span>
            </p>
            <hr />
            <p className="detail">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
