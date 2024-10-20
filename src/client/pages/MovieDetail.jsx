import React, { useEffect, useLayoutEffect, useState } from 'react';
import CloseButtonImage from '@images/modal_button_close.png';
import StarEmptyImage from '@images/star_empty.png';
import { useNavigate } from 'react-router-dom';
import { TMDB_ORIGINAL_URL } from '../../server/constants/movies.js';
import { fetchMovieDetail } from '../apis/movies.js';

const MovieDetail = ({ detail }) => {
  const [detailData, setDetailData] = useState(detail);
  const navigate = useNavigate();

  const fetchDetail = async () => {
    const movieId = window.location.pathname.split('/detail/')[1];
    const movieDetail = await fetchMovieDetail(movieId);
    setDetailData(movieDetail);
  };

  useEffect(() => {
    if (!detailData) {
      fetchDetail();
    }
  }, []);

  if (!detailData) {
    return <div className='modal-background active'>Loading ...</div>;
  }

  const bannerUrl = TMDB_ORIGINAL_URL + detailData.poster_path || '';
  const releaseYear = detailData.release_date?.split('-')[0] || '';
  const genres = detailData.genres?.map((genre) => genre.name).join(', ') || '';

  const handleModalClose = () => {
    navigate('/');
  };

  return (
    <div className='modal-background active' id='modalBackground' onClick={handleModalClose}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <button className='close-modal' id='closeModal' onClick={handleModalClose}>
          <img src={CloseButtonImage} />
        </button>
        <div className='modal-container'>
          <div className='modal-image'>
            <img src={bannerUrl} />
          </div>
          <div className='modal-description'>
            <h2>{detailData.title}</h2>
            <p className='category'>
              {releaseYear} · {genres}
            </p>
            <p className='rate'>
              <img src={StarEmptyImage} className='star' />
              <span>{detailData.vote_average}</span>
            </p>
            <hr />
            <p className='detail'>{detailData.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
