import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import fetchMovies from "../../server/apis/movies";
import { TMDB_ORIGINAL_URL } from "../../server/apis/constants";
import StarFilled from "@images/star_filled.png";
import modalCloseIcon from "@images/modal_button_close.png";

function Modal({ initialData }) {
  const navigate = useNavigate();
  const movieId = window.location.pathname.split("/detail/")[1];
  const [movieDetailInfo, setMovieDetailInfo] = useState(
    initialData.movieDetail || null
  );

  useEffect(() => {
    const fetchDetail = async () => {
      if (!movieDetailInfo || movieDetailInfo.id !== movieId) {
        try {
          const detail = await fetchMovies.detail(movieId);
          setMovieDetailInfo(detail);
        } catch (error) {
          console.error("Failed to fetch movie details:", error);
        }
      }
    };

    fetchDetail();
  }, [movieId]);
  if (!movieDetailInfo) {
    return <div>Loading...</div>;
  }

  const { title, genres, vote_average, release_date, overview, poster_path } =
    movieDetailInfo;

  return (
    <div className="modal-background active" onClick={() => navigate("/")}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={() => navigate("/")}>
          <img src={modalCloseIcon} alt="닫기 버튼" />
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <img src={`${TMDB_ORIGINAL_URL}${poster_path}`} alt={title} />
          </div>
          <div className="modal-description">
            <h2>{title}</h2>
            <p className="category">
              {release_date.split("-")[0]} ·{" "}
              {genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="rate">
              <img src={StarFilled} className="star" alt="별점" />
              <span>{vote_average.toFixed(1)}</span>
            </p>
            <hr />
            <p className="detail">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
