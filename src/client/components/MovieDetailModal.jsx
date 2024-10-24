import React from "react";

const MovieDetailModal = ({ movieDetail, onClose }) => {
  const { title, releaseYear, genres, rate, description, bannerUrl } =
    movieDetail;

  return (
    <div className="modal-background active" id="modalBackground">
      <div className="modal">
        <button className="close-modal" id="closeModal" onClick={onClose}>
          <img src="/static/images/modal_button_close.png" />
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <img
              src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${bannerUrl}`}
              alt="영화 포스터"
            />
          </div>
          <div className="modal-description">
            <h2>{title}</h2>
            <p className="category">
              {releaseYear} · {genres}
            </p>
            <p className="rate">
              <img src="/static/images/star_empty.png" className="star" />
              <span>{rate}</span>
            </p>
            <hr />
            <p className="detail">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailModal;
