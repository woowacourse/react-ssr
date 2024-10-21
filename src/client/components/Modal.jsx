import modal_button_close from "../../../public/images/modal_button_close.png";
import star_empty from "../../../public/images/star_empty.png";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  TMDB_MOVIE_DETAIL_URL,
  TMDB_ORIGINAL_URL,
} from "../../server/constants/constants";

const getMovieDetailUrl = (movieId) => {
  return TMDB_MOVIE_DETAIL_URL + `${movieId}?language=ko-KR`;
};

const FETCH_OPTIONS = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
  },
};

const Modal = ({ movieDetail }) => {
  const { id } = useParams();

  const [movie, setMovie] = useState(movieDetail || null);

  const navigate = useNavigate();
  const handleModalClose = () => navigate("/");

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(getMovieDetailUrl(id), FETCH_OPTIONS);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
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
                  {movie.release_date.split("-")[0]} ·{" "}
                  {movie.genres.map((genre) => genre.name).join(", ")}
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
