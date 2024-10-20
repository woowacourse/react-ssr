import React from "react";
import { useNavigate } from "react-router-dom";
import { TMDB_ORIGINAL_URL } from "../../constant";
import modalButtonClose from "@images/modal_button_close.png";
import filledStar from "@images/star_filled.png";
import MainPage from "./MainPage";

const ModalPage = ({ movies, movieDetailItem }) => {
  const navigate = useNavigate();

  return (
    <>
      <MainPage movies={movies} />
      <div
        id="modalBackground"
        className="modal-background active"
      >
        <div className="modal">
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
              <img src={TMDB_ORIGINAL_URL + movieDetailItem.backdrop_path} />
            </div>
            <div className="modal-description">
              <h2>
                {movieDetailItem.title}
                {isActive}
              </h2>
              <p className="category">
                {movieDetailItem.release_date.substring(0, 4)} · {movieDetailItem.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p className="rate">
                <img
                  src={filledStar}
                  className="star"
                />
                <span>{movieDetailItem.vote_average.toFixed(1)}</span>
              </p>
              <hr />
              <p className="detail">{movieDetailItem.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPage;
