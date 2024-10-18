import React, { useEffect, useState } from "react";

import { TMDB_ORIGINAL_URL } from "../../../../server/constant";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMovieItemDetail } from "../../../../server/movies";

const Modal = ({ movie }) => {
  const [movieData, setMovieData] = useState(movie);

  const { id } = useParams();

  const navigate = useNavigate();

  const handleModalClose = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchMovie = async () => {
      if (!movie) {
        const fetchedMovie = await fetchMovieItemDetail(id);

        setMovieData(fetchedMovie);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movieData) return <div>...loading</div>;

  const MODAL_IMAGE_URL = TMDB_ORIGINAL_URL + movieData.poster_path;

  return (
    <div className={`modal-background active`} id="modalBackground">
      <div className="modal">
        <button
          className="close-modal"
          id="closeModal"
          onClick={handleModalClose}
        >
          <img src="/static/images/modal_button_close.png" />
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <img src={`${MODAL_IMAGE_URL}.jpg`} />
          </div>
          <div className="modal-description">
            <h2>{movieData.title}</h2>
            <p className="category">
              {`${movieData.release_date} · 
              ${movieData.genres.map((genre) => genre.name).join(", ")}`}
            </p>
            <p className="rate">
              <img src="/static/images/star_filled.png" className="star" />
              <span>{movieData.vote_average.toFixed(1)}</span>
            </p>
            <hr />
            <p className="detail">{movieData.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
