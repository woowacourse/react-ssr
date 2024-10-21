import React from "react";
import { round } from "../utils";
import { TMDB_ORIGINAL_URL } from "../../constants";

function ServerModal({ movie }) {
  if (!movie) return null;
  return (
    <div className="modal-background active" id="modalBackground">
      <div className="modal">
        <button className="close-modal" id="closeModal" onClick={() => window.history.pushState({}, "", `/`)}>
          <img src={"/assets/images/modal_button_close.png"} />
        </button>
        <div className="modal-container">
          <div className="modal-image">{movie && <img src={TMDB_ORIGINAL_URL + movie?.poster_path} />}</div>
          <div className="modal-description">
            <h2>{movie?.title}</h2>
            <p className="category">
              {movie?.release_date.split("-")[0]} · {movie?.genres?.map(({ name }) => name).join(" ")}
            </p>
            <p className="rate">
              <img src={"/assets/images/star_empty.png"} className="star" />
              <span>{round(movie?.vote_average, 1)}</span>
            </p>
            <hr />
            <p className="detail">{movie?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServerModal;
