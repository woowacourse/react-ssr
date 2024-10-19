import React from "react";

import useMovieDetailModal from "../../hooks/useMovieDetailModal";
import CloseButton from "@images/modal_button_close.png";
import StarEmpty from "@images/star_empty.png";
import round from "../../../utils/round";
import { useNavigate } from "react-router-dom";

function MovieDetailModal({ serverMovieDetail }) {
  const navigate = useNavigate();

  const { modalActivated, movieDetail, toggleModal } = useMovieDetailModal(serverMovieDetail);

  if (!movieDetail) {
    return null;
  }

  const closeModalAndNavigateHome = () => {
    toggleModal();
    navigate("/");
  };

  const { title, bannerUrl, releaseYear, description } = movieDetail;
  const genres = movieDetail?.genres?.join(", ");
  const rate = round(movieDetail?.rate, 1);

  return (
    <div className={`modal-background ${modalActivated && "active"}`} id="modalBackground">
      <div className="modal">
        <button className="close-modal" id="closeModal" onClick={closeModalAndNavigateHome}>
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
              <img src={StarEmpty} className="star" />
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

export default MovieDetailModal;
