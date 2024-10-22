import React, { useEffect, useState, useParams } from "react";

import { fetchMovieDetail } from "../api";
import { useNavigate } from "react-router-dom";

const MovieDetail = ({ initialData }) => {
  const [movie, setMovie] = useState(initialData.movieDetail || {});
  const navigate = useNavigate();

  const loadMovie = async () => {
    const movieId = window.location.pathname.split("/detail/")[1];
    const data = await fetchMovieDetail(movieId);

    setMovie(data);
  };

  useEffect(() => {
    if (initialData.movieDetail) {
      setMovie(initialData.movieDetail);
    } else {
      loadMovie();
    }

    delete initialData.movieDetail;
  }, []);

  return (
    <div
      className="modal-background active"
      id="modalBackground"
      onClick={() => navigate("/")}
    >
      {movie && (
        <div className="modal">
          <button
            className="close-modal"
            id="closeModal"
            onClick={() => navigate("/")}
          >
            <img src="/static/images/modal_button_close.png" />
          </button>
          <div className="modal-container">
            <div className="modal-image">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
            </div>
            <div className="modal-description">
              <h2>{movie.title}</h2>
              <p className="category">
                {movie.genres?.map((genre) => genre.name)}
              </p>
              <p className="rate">
                <img src="/static/images/star_filled.png" className="star" />
                <span>{movie?.vote_average?.toFixed(1)}</span>
              </p>
              <hr />
              <p className="detail">{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
