import React from "react";
import filledStar from "@images/star_filled.png";
import modalCloseIcon from "@images/modal_button_close.png";
import { Link, useLoaderData } from "react-router-dom";

export default function MovieModal() {
  const focusedMovie = useLoaderData();

  const { poster_path, title, category, vote_average, overview } = focusedMovie;

  return (
    <div className="modal-background active" id="modalBackground">
      <div className="modal">
        <Link to="/">
          <button className="close-modal" id="closeModal">
            <img src={modalCloseIcon} />
          </button>
        </Link>
        <div className="modal-container">
          <div className="modal-image">
            <img src={`https://image.tmdb.org/t/p/original${poster_path}`} />
          </div>
          <div className="modal-description">
            <h2>{title}</h2>
            <p className="category">{category}</p>
            <p className="rate">
              <img src={filledStar} className="star" />
              <span>{vote_average.toFixed(1)}</span>
            </p>
            <hr />
            <p className="detail">{overview || "내용이 없습니다."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
