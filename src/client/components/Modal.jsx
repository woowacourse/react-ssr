import React from "react";
import { useNavigate } from "react-router-dom";
import { round } from "../../utils/round";
import CloseButton from "@images/modal_button_close.png";
import StarEmpty from "@images/star_empty.png";

const Modal = ({ movieDetail }) => {
  const navigate = useNavigate();

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetail;
  const genresToString = genres
    ?.map((genre) => {
      return genre.name;
    })
    .join(", ");
  const rate = round(vote_average, 1);

  const onCloseButtonClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className='modal-background active' id='modalBackground'>
      <div className='modal'>
        <button
          className='close-modal'
          id='closeModal'
          onClick={onCloseButtonClick}
        >
          <img src={CloseButton} />
        </button>
        <div className='modal-container'>
          <div className='modal-image'>
            <img
              src={`https://image.tmdb.org/t/p/w440_and_h660_face/${poster_path}`}
            />
          </div>
          <div className='modal-description'>
            <h2>{title}</h2>
            <p className='category'>
              {release_date} · {genresToString}
            </p>
            <p className='rate'>
              <img src={StarEmpty} className='star' />
              <span>{round(rate, 1)}</span>
            </p>
            <hr />
            <p className='detail'>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
