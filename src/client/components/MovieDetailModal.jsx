import React from "react";
import { TMDB_THUMBNAIL_URL } from "../constants";
import round from "../util/round";
import starEmptyImage from "@images/star_empty.png";
import closeIcon from "@images/modal_button_close.png";
import { Link } from "react-router-dom";

const MovieDetailModal = ({ movieDetail }) => {
  return (
    <div className="modal-background active">
      <div className="modal">
        <Link className="close-modal" to={"/"}>
          <img src={closeIcon} alt="닫기" />
        </Link>
        <div className="modal-container">
          <div className="modal-image">
            <img
              src={`${TMDB_THUMBNAIL_URL}${movieDetail.poster_path}`}
              alt=""
            />
          </div>
          <div className="modal-description">
            <h2>{movieDetail.title}</h2>
            <p className="category">
              {movieDetail.release_date?.split("-")[0]} ·
              {movieDetail.genres?.map((genre) => genre.name).join(", ")}
            </p>
            <p className="rate">
              <img src={starEmptyImage} className="star" alt="평점" />
              <span>{round(movieDetail.vote_average)}</span>
            </p>
            <hr />
            <p className="detail">{movieDetail.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailModal;
