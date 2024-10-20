import { CloseButton, StarEmpty } from "../../../shared/ImageResources";
import { round } from "../../../shared/utils";
import useMovieModal from "../hooks/useMovieModal";
import React, { useEffect } from "react";

function MovieModal() {
  const { movieDetail, closeModal } = useMovieModal();

  const { title, bannerUrl, releaseYear, description } = movieDetail;
  const genres = movieDetail?.genres?.join(", ");
  const rate = round(movieDetail?.rate, 1);

  return (
    <div
      className="modal-background active"
      id="modalBackground"
    >
      <div className="modal">
        <button
          className="close-modal"
          id="closeModal"
          onClick={closeModal}
        >
          <img src={CloseButton} />
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <img src={bannerUrl} />
          </div>
          <div className="modal-description">
            <h2>{title}</h2>
            <p className="category">
              {releaseYear} · {genres}
            </p>
            <p className="rate">
              <img
                src={StarEmpty}
                className="star"
              />
              <span>{round(rate, 1)}</span>
            </p>
            <hr />
            <p className="detail">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
