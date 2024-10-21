import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import modalButtonClose from "@images/modal_button_close.png";
import startEmpty from "@images/star_empty.png";

import { TMDB_ORIGINAL_URL } from "../../../common/constants/api";
import { MOVIE_PAGE_PATH } from "../../../common/constants/path";

export default function MovieDetailModal() {
  const navigate = useNavigate();
  const goToHome = () => navigate(MOVIE_PAGE_PATH.home);

  const movieDetail = useLoaderData();
  const { poster_path, title, genres, overview, vote_average, release_date } =
    movieDetail;

  const genresNames = genres.map((g) => g.name);
  const posterImageUrl = `${TMDB_ORIGINAL_URL}${poster_path}`;
  const roundedRate = vote_average.toFixed(1);
  const releaseYear = new Date(release_date).getFullYear();

  return (
    <div
      className="modal-background active"
      id="modalBackground"
      onClick={goToHome}
    >
      <div className="modal">
        <button className="close-modal" onClick={goToHome}>
          <img src={modalButtonClose} alt="Close" />
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <img src={posterImageUrl} alt={title} />
          </div>
          <div className="modal-description">
            <h2>{title}</h2>
            <p className="category">
              {releaseYear} · {genresNames.join(", ")}
            </p>
            <p className="rate">
              <img src={startEmpty} className="star" alt="Star" />
              <span>{roundedRate}</span>
            </p>
            <hr />
            <p className="detail">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
