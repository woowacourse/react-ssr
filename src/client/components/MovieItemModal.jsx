import React from "react";
import starEmptyImg from "@images/star_empty.png";
import CloseButton from "@images/modal_button_close.png";
import { round } from "../utils";
import { TMDB_ORIGINAL_URL } from "../constants";
import { Link } from "react-router-dom";

function MovieItemModal({ movieDetail }) {
  const img = TMDB_ORIGINAL_URL + movieDetail.poster_path;
  const title = movieDetail.title;
  const releaseYear = movieDetail.release_date.split("-")[0];
  const genres = movieDetail.genres.map(({ name }) => name);
  const rate = round(movieDetail.vote_average, 1);

  return (
    <div className="modal-background active" id="modalBackground">
      <div className="modal">
        <Link to={`/`}>
          <button className="close-modal" id="closeModal">
            <img src={CloseButton} />
          </button>
        </Link>
        <div className="modal-container">
          <div className="modal-image">
            <img src={img} />
          </div>
          <div className="modal-description">
            <h2>{title}</h2>
            <p className="category">
              {releaseYear} · {genres}
            </p>
            <p className="rate">
              <img src={starEmptyImg} className="star" />
              <span>{rate}</span>
            </p>
            <hr />
            <p className="detail">{movieDetail.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItemModal;
