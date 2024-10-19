import CloseButton from '@images/modal_button_close.png';
import StarEmpty from '@images/star_empty.png';
import React from 'react';
import { round } from '../utils/round';

export default function MovieDetailModal({
  movieDetail: { title, bannerUrl, releaseYear, description, genres, rate },
  close,
}) {
  const formattedGenres = genres?.join(', ');
  const formattedRate = round(rate, 1);

  return (
    <div className="modal-background active" id="modalBackground">
      <div className="modal">
        <button className="close-modal" id="closeModal" onClick={() => close()}>
          <img src={CloseButton} />
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <img src={bannerUrl} />
          </div>
          <div className="modal-description">
            <h2>{title}</h2>
            <p className="category">
              {releaseYear} · {formattedGenres}
            </p>
            <p className="rate">
              <img src={StarEmpty} className="star" />
              <span>{formattedRate}</span>
            </p>
            <hr />
            <p className="detail">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
