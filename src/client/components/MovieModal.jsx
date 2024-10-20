import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { fetchMovieDetail } from "../../common/apis/movies";

import { TMDB_THUMBNAIL_URL } from "../constants";
import starEmptyImage from "@images/star_empty.png";

const MovieModal = ({ movie: initialMovie }) => {
  const navigate = useNavigate();
  const { id: movieId } = useParams();

  const [movie, setMovie] = useState(initialMovie || null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await fetchMovieDetail(movieId);

      setMovie(data);
    };

    if (!movie) {
      fetchMovie();
    }
  }, [movie, movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { title, poster_path, genres, vote_average, overview } = movie;

  return (
    movie && (
      <div className="modal-background active" id="modalBackground">
        <div className="modal">
          <button
            className="close-modal"
            id="closeModal"
            onClick={() => navigate("/")}
          >
            <img src="/static/images/modal_button_close.png" alt="Close" />
          </button>
          <div className="modal-container">
            <div className="modal-image">
              <img src={`${TMDB_THUMBNAIL_URL}${poster_path}`} alt={title} />
            </div>
            <div className="modal-description">
              <h2>{title}</h2>
              <p className="category">
                {genres.map((genre) => genre.name).join(", ")}
              </p>
              <p className="rate">
                <img src={starEmptyImage} className="star" alt="Rating" />
                <span>{vote_average.toFixed(1)}</span>
              </p>
              <hr />
              <p className="detail">{overview}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MovieModal;
