import React, { useEffect, useState } from "react";
import starEmptyImage from "@images/star_empty.png";
import modalButtonCloseImage from "@images/modal_button_close.png";
import { round } from "../utils";
import { Link } from "react-router-dom";
import { fetchMovieDetail } from "../../apis/handler";
import transformMovieDetailData from "../../apis/transformMovieDetailData";
import { SESSION_STORAGE_KEY } from "../constants";

function MovieDetailModal({ initialMovieDetailData }) {
  const [movieDetail, setMovieData] = useState(initialMovieDetailData);
  const updateMovieData = async movieId => {
    const data = await fetchMovieDetail(movieId);

    setMovieData(transformMovieDetailData(data));
  };

  useEffect(() => {
    const isNavigated = sessionStorage.getItem(SESSION_STORAGE_KEY.isNavigated);

    if (isNavigated) {
      const movieId = window.location.pathname.split("/detail/")[1];
      updateMovieData(movieId);
    }

    return () => {
      sessionStorage.removeItem(SESSION_STORAGE_KEY.isNavigated);
    };
  }, []);

  if (!movieDetail) return "";

  return (
    <div className="modal-background active" id="modalBackground">
      <div className="modal">
        <Link to={"/"} className="close-modal" id="closeModal">
          <img src={modalButtonCloseImage} alt="모달 닫힘 버튼 아이콘" />
        </Link>
        <div className="modal-container">
          <div className="modal-image">
            <img
              src={movieDetail.bannerUrl}
              alt={`${movieDetail.title} 영화 배너`}
            />
          </div>
          <div className="modal-description">
            <h2>{movieDetail.title}</h2>
            <p className="category">
              {movieDetail.releaseYear} · {movieDetail.genres?.join(", ")}
            </p>
            <p className="rate">
              <img src={starEmptyImage} className="star" alt="비어있는 별" />
              <span>{round(movieDetail.rate, 1)}</span>
            </p>
            <hr />
            <p className="detail">{movieDetail.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailModal;
