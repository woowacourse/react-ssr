import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { TMDB_ORIGINAL_URL } from "../../constant";
import { fetchMovieDetail } from "../../server/api";
import modalButtonClose from "@images/modal_button_close.png";
import filledStar from "@images/star_filled.png";

const MovieModal = ({ movieDetailItem }) => {
  const navigate = useNavigate();
  const [detailItem, setDetailItem] = useState(movieDetailItem);

  const fetchDetail = async () => {
    const movieId = window.location.pathname.split("/detail/")[1];
    const movieDetail = await fetchMovieDetail(movieId);
    setDetailItem(movieDetail);
  };

  useEffect(() => {
    if (!detailItem) {
      fetchDetail();
    }
  }, [detailItem]);

  if (!detailItem) {
    return <div className="modal-background active">Loading...</div>;
  }

  return (
    <div
      id="modalBackground"
      className="modal-background active"
      onClick={() => {
        navigate("/");
      }}
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-modal"
          id="closeModal"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={modalButtonClose} />
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <img src={TMDB_ORIGINAL_URL + detailItem.poster_path || ""} />
          </div>
          <div className="modal-description">
            <h2>{detailItem.title}</h2>
            <p className="category">
              {detailItem.release_date?.substring(0, 4) || ""} · {detailItem.genres?.map((genre) => genre.name).join(", ") || ""}
            </p>
            <p className="rate">
              <img
                src={filledStar}
                className="star"
              />
              <span>{detailItem.vote_average?.toFixed(1) || ""}</span>
            </p>
            <hr />
            <p className="detail">{detailItem.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
