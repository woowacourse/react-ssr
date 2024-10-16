import starEmptyImage from "@images/star_empty.png";
import modalButtonCloseImage from "@images/modal_button_close.png";
import { round } from "../utils";
import { useNavigate } from "react-router-dom";

function MovieDetailModal({ movieDetail }) {
  const navigate = useNavigate();
  const { title, bannerUrl, releaseYear, description } = movieDetail;
  const genres = movieDetail?.genres?.join(", ");
  const rate = round(movieDetail?.rate, 1);

  const handleCloseButtonClick = () => {
    navigate("/");
  };
  return (
    <div className="modal-background active" id="modalBackground">
      <div className="modal">
        <button
          className="close-modal"
          id="closeModal"
          onClick={handleCloseButtonClick}
        >
          <img src={modalButtonCloseImage} alt="닫힘 버튼 아이콘" />
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <img src={bannerUrl} alt={`${title} 영화 배너`} />
          </div>
          <div className="modal-description">
            <h2>{title}</h2>
            <p className="category">
              {releaseYear} · {genres}
            </p>
            <p className="rate">
              <img src={starEmptyImage} className="star" alt="비어있는 별" />
              <span>{rate}</span>
            </p>
            <hr />
            <p className="detail">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailModal;
