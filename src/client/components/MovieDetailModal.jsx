import React from "react";
import { Link } from "react-router-dom";

import ModalCloseButton from "@images/modal_button_close.png";
import StarEmptyIcon from "@images/star_empty.png";

export default function MovieDetailModal({ movieDetail }) {
  if (!movieDetail) return null;

  const { title, bannerUrl, releaseYear, genres, rate, description } =
    movieDetail;

  return (
    <div id="modalBackground" className="modal-background active">
      <div className="modal">
        <Link to={"/"} id="closeModal" className="close-modal">
          <img alt="영화 정보 모달 닫기 버튼" src={ModalCloseButton} />
        </Link>

        <div className="modal-container">
          <div className="modal-image">
            <img alt={`${title} 영화 배너 이미지`} src={bannerUrl} />
          </div>

          <div className="modal-description">
            <h2>{title}</h2>
            <p className="category">
              {releaseYear} · {genres.join(", ")}
            </p>
            <p className="rate">
              <img alt="별점 이미지" src={StarEmptyIcon} className="star" />
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
