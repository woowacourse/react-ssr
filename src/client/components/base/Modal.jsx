import { useNavigate } from "react-router-dom";
import { TMDB_THUMBNAIL_URL } from "../../../constant/url";
import { round } from "../../../utils";
import React from "react";
import CloseButton from "../../../../public/images/modal_button_close.png";
import StarEmpty from "../../../../public/images/star_empty.png";
function Modal({ movieDetail }) {
  const { title, poster_path, release_date, overview } = movieDetail;
  const genres = movieDetail?.genres?.map((genre) => genre.name).join(", ");
  const rate = round(movieDetail?.vote_average, 1);
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + "/" + poster_path;
  const navigate = useNavigate();
  return (
    <div className="modal-background active" id="modalBackground">
      <div className="modal">
        <button
          className="close-modal"
          id="closeModal"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={CloseButton} />
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <img src={thumbnailFullUrl} />
          </div>
          <div className="modal-description">
            <h2>{title}</h2>
            <p className="category">
              {release_date} · {genres}
            </p>
            <p className="rate">
              <img src={StarEmpty} className="star" />
              <span>{round(rate, 1)}</span>
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
