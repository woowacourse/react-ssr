import CloseButton from "@images/modal_button_close.png";
import StarEmpty from "@images/star_empty.png";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieDetail } from "../../server/routes/movieList";

const MovieDetailModal = ({ detailMovie }) => {
  const { id } = useParams();
  const [detailMovieData, setDetailMovieData] = useState(detailMovie);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      if (detailMovie?.id !== id || !detailMovieData) {
        const data = await getMovieDetail(id);
        setDetailMovieData(data);
      }
    };
    fetchMovieDetail();
  }, [id]);

  const handleMoveHome = () => {
    setDetailMovieData(null);
    navigate("/");
  };

  if (!detailMovieData) {
    return <div>Loading...</div>;
  }

  const { title, thumbnail, releaseYear, description, genres, rate } =
    detailMovieData;

  return (
    <div className="modal-background active" id="modalBackground">
      <div className="modal">
        <button
          className="close-modal"
          id="closeModal"
          onClick={handleMoveHome}
        >
          <img src={CloseButton} />
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <img
              src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${thumbnail}`}
            />
          </div>
          <div className="modal-description">
            <h2>{title}</h2>
            <p className="category">
              {releaseYear} · {genres?.join(", ")}
            </p>
            <p className="rate">
              <img src={StarEmpty} className="star" />
              <span>{rate}</span>
            </p>
            <hr />
            <p className="detail">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailModal;
