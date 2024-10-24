import React from "react";
import { TMDB_ORIGINAL_URL } from "../../api/endpoints.js";
import starFilledImage from "@images/star_filled.png";
import modalButtonCloseImage from "@images/modal_button_close.png";

const Modal = ({ movieDetailItem, handleCloseModal }) => {
  if (!movieDetailItem) return null;

  return (
    <div className="modal-background active">
      <div className="modal">
        <button className="close-modal" onClick={handleCloseModal}>
          <img src={modalButtonCloseImage} alt="Close modal" />
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <img
              src={`${TMDB_ORIGINAL_URL}${movieDetailItem.poster_path}`}
              alt={movieDetailItem.title}
            />
          </div>
          <div className="modal-description">
            <h2>{movieDetailItem.title}</h2>
            <p className="category">
              {movieDetailItem.release_date} ·{" "}
              {movieDetailItem.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="rate">
              <img src={starFilledImage} className="star" alt="Star rating" />
              <span>{movieDetailItem.vote_average}</span>
            </p>
            <hr />
            <p className="detail">{movieDetailItem.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
