import React from "react";
import starEmptyImage from "@images/star_empty.png";
import modalButtonCloseImage from "@images/modal_button_close.png";
import { round } from "../utils";
import { Link } from "react-router-dom";

function MovieDetailModal({ movieDetail }) {
  const genres = movieDetail?.genres?.join(", ");
  const rate = round(movieDetail?.rate, 1);

  if (!movieDetail) return "";

  const { title, bannerUrl, releaseYear, description } = movieDetail;

  return (
    <div className="modal-background active" id="modalBackground">
      <div className="modal">
        <Link to={"/"} className="close-modal" id="closeModal">
          <img src={modalButtonCloseImage} alt="모달 닫힘 버튼 아이콘" />
        </Link>
        <div className="modal-container">
          <div className="modal-image">
            <img src={bannerUrl} alt={`${title} 영화 배너`} />
          </div>
          <div className="modal-description">
            <h2>{title}</h2>
            <p className="category">
              {releaseYear} · {genres}
            </p>
            <p className="rate">
              <img src={starEmptyImage} className="star" alt="비어있는 별" />
              <span>{rate}</span>
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
