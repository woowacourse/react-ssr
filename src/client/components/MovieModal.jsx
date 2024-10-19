import React from "react";
import { TMDB_THUMBNAIL_URL } from "../constants";

import starEmptyImage from "@images/star_empty.png";

const MovieModal = ({ movie }) => {
  const { title, poster_path, genres, vote_average, overview } = movie;

  return (
    <div className="modal-background active" id="modalBackground">
      <div className="modal">
        <button className="close-modal" id="closeModal">
          <img src="/static/images/modal_button_close.png" alt="Close" />
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <img src={`${TMDB_THUMBNAIL_URL}${poster_path}`} alt={title} />
          </div>
          <div className="modal-description">
            <h2>{title}</h2>
            <p className="category">
              {genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="rate">
              <img src={starEmptyImage} className="star" alt="Rating" />
              <span>{vote_average.toFixed(1)}</span>
            </p>
            <hr />
            <p className="detail">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
