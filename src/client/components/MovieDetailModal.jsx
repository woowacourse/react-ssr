import React from 'react';
import { useNavigate } from 'react-router-dom';
import modalButtonCloseImage from '@images/modal_button_close.png';
import starEmptyImage from '@images/star_empty.png';
import useMovieDetailModal from '../hooks/useMovieDetailModal';

function MovieDetailModal() {
  const { isModalOpen, toggleModal, movieDetail } = useMovieDetailModal();
  const navigate = useNavigate();

  if (!movieDetail) {
    return null;
  }

  const { title, bannerUrl, releaseYear, description } = movieDetail;
  const genres = movieDetail?.genres?.join(', ');
  const rate = movieDetail?.rate;

  const handleClose = () => {
    toggleModal();
    navigate(-1);
  };

  const handleBackgroundClick = (e) => {
    if (e.target.id === 'modalBackground') {
      handleClose();
    }
  };

  return (
    <div className={`modal-background ${isModalOpen && 'active'}`} id='modalBackground' onClick={handleBackgroundClick}>
      <section className='modal'>
        <button className='close-modal' id='closeModal' onClick={handleClose}>
          <img src={modalButtonCloseImage} alt='Close Modal' />
        </button>
        <div className='modal-container'>
          <div className='modal-image'>
            <img src={bannerUrl} alt='Movie Banner' />
          </div>
          <div className='modal-description'>
            <h2>{title}</h2>
            <p className='category'>
              {releaseYear} · {genres}
            </p>
            <p className='rate'>
              <img src={starEmptyImage} className='star' alt='Rating Star' />
              <span>{rate}</span>
            </p>
            <hr />
            <p className='detail'>{description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MovieDetailModal;
