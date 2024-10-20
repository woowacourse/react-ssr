import CloseButton from "@images/modal_button_close.png";
import StarEmpty from "@images/star_empty.png";
import React from "react";

const MovieDetailModal = ({ detailMovie }) => {
  const { title, thumbnail, releaseYear, description, genres, rate } =
    detailMovie;

  return (
    <div className="modal-background active" id="modalBackground">
      <div className="modal">
        <button className="close-modal" id="closeModal" onClick={() => {}}>
          <img src={CloseButton} />
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <img
              src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${thumbnail}`}
            />
          </div>
          <div className="modal-description">
            <h2>{title}</h2>
            <p className="category">
              {releaseYear} · {genres?.join(", ")}
            </p>
            <p className="rate">
              <img src={StarEmpty} className="star" />
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
