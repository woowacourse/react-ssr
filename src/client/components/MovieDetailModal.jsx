import React from 'react';
import starEmptyImage from '@images/star_empty.png';
import closeButton from '@images/modal_button_close.png';

export default function MovieDetailModal({
  movieDetail: { title, rate, thumbnailUrl, description, releaseYear, genres },
  onCloseModal,
  isLoading,
}) {
  if (isLoading) {
    return null;
  }

  return (
    <div className="modal-background active" id="modalBackground">
      <div className="modal">
        <button className="close-modal" id="closeModal" onClick={onCloseModal}>
          <img src={closeButton} alt="" />
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <img src={thumbnailUrl} alt="" />
          </div>
          <div className="modal-description">
            <h2>{title}</h2>
            <p className="category">
              {releaseYear} · {genres}
            </p>
            <p className="rate">
              <img src={starEmptyImage} alt="" className="star" />
              <span>{rate}</span>
            </p>
            <hr />
            <p className="detail">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
