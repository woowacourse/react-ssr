import React from 'react';
import { TMDB_BANNER_URL } from '../../api/constants';
import { useNavigate } from 'react-router-dom';

export default function Detail({ movieDetail }) {
  if (!movieDetail) {
    return (
      <div className="modal-background active" id="modalBackground">
        <div className="modal">
          <p>영화 정보가 없습니다.</p>
        </div>
      </div>
    );
  }

  const {
    title,
    release_date,
    genreNames,
    vote_average,
    overview,
    poster_path,
  } = movieDetail;

  const navigate = useNavigate();
  const handleModalClose = () => {
    console.log('실행==========================================');
    navigate('/');
  };

  return (
    <div className="modal-background active" id="modalBackground">
      <div className="modal">
        <button
          className="close-modal"
          id="closeModal"
          onClick={handleModalClose}
        >
          <img src={'/assets/images/modal_button_close.png'} />
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <img src={`${TMDB_BANNER_URL}${poster_path}`} alt={title} />
          </div>
          <div className="modal-description">
            <h2>{title}</h2>
            <p className="category">
              {release_date} · {genreNames}
            </p>
            <p className="rate">
              <img src={'/assets/images/star_empty.png'} className="star" />
              <span>{vote_average}</span>
            </p>
            <hr />
            <p className="detail">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
