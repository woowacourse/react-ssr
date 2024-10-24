import modal_button_close from "../../../public/images/modal_button_close.png";
import star_empty from "../../../public/images/star_empty.png";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TMDB_ORIGINAL_URL } from "../../server/constants/constants";

import { getMovieDetail } from "../../apis/movies";

const Modal = ({ movieDetail }) => {
  const { id } = useParams();

  const [movie, setMovie] = useState(movieDetail || null);

  const navigate = useNavigate();
  const handleModalClose = () => navigate("/");

  const releaseDateString = movie
    ? `${movie.release_date.split("-")[0]} · `
    : "";
  const genresString = movie
    ? movie.genres.map((genre) => genre.name).join(", ")
    : "";

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const movieDetail = await getMovieDetail(id);

      setMovie(movieDetail);
    };

    fetchMovieDetail();
  }, [id]);

  return (
    <>
      {movie && (
        <div className="modal-background active" id="modalBackground">
          <div className="modal">
            <button
              className="close-modal"
              id="closeModal"
              onClick={handleModalClose}
            >
              <img src={modal_button_close} />
            </button>
            <div className="modal-container">
              <div className="modal-image">
                <img src={`${TMDB_ORIGINAL_URL}${movie.poster_path}`} />
              </div>
              <div className="modal-description">
                <h2>{movie.title}</h2>
                <p className="category">
                  {releaseDateString}
                  {genresString}
                </p>
                <p className="rate">
                  <img src={star_empty} className="star" />
                  <span>{movie.vote_average.toFixed(1)}</span>
                </p>
                <hr />
                <p className="detail">{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
