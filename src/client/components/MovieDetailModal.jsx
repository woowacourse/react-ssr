import React from 'react';
import { parseMovieDetail } from '../utils/parseMovieDetail';

function MovieDetailModal({ movieDetail, onCloseModal }) {
  const movie = parseMovieDetail(movieDetail);

  return (
    <div className="modal-background active" id="modalBackground">
      <div className="modal">
        <button className="close-modal" id="closeModal" onClick={onCloseModal}>
          <img src="../assets/images/modal_button_close.png" />
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <img src={movie.bannerUrl} />
          </div>
          <div className="modal-description">
            <h2>{movie.title}</h2>
            <p className="category">
              {movie.releaseYear} · {movie?.genres?.join(', ')}
            </p>
            <p className="rate">
              <img src="../assets/images/star_filled.png" className="star" />
              <span>{movie.rate}</span>
            </p>
            <hr />
            <p className="detail">{movie.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailModal;
