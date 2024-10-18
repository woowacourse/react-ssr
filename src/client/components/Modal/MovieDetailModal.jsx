import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TMDB_ORIGINAL_URL } from '../../../server/constants';
import starFilledImage from '@images/star_filled.png';
import closeModalButton from '@images/modal_button_close.png';
import { fetchMovieDetail } from '../../../server/fetch';

export default function MovieDetailModal({ movie: ssrMovieDetail }) {
  const navigate = useNavigate();
  const location = useLocation();
  const movieId = parseInt(location.pathname.split('/detail/')[1]);
  // 초기 상태를 서버에서 받은 데이터로 설정
  const [movieDetail, setMovieDetail] = useState(ssrMovieDetail || null);

  useEffect(() => {
    const fetchDetail = async () => {
      // CSR로 이동 시 fetch 수행
      if ((!ssrMovieDetail &&  movieId) || (ssrMovieDetail.id !== movieId)) {
        setMovieDetail(await fetchMovieDetail(movieId));
      }
    };

    fetchDetail();
  }, [location, ssrMovieDetail]);
  



  const closeModal = () => navigate('/');
  // 데이터가 준비되지 않았을 때 로딩 메시지 표시
  if (!movieDetail) return <p>로딩 중...</p>;
  if(movieDetail){
    if(movieDetail.id !== movieId) return <p>로딩 중...</p>;
  }

  const genres = movieDetail.genres.map((genre) => genre.name).join(', ');

  return (
    <div className="modal-background active" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={closeModal}>
          <img src={closeModalButton} alt="닫기 버튼" />
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <img
              src={`${TMDB_ORIGINAL_URL}${movieDetail.poster_path}`}
              alt={movieDetail.title}
            />
          </div>
          <div className="modal-description">
            <h2>{movieDetail.title}</h2>
            <p className="category">
              {movieDetail.release_date.split('-')[0]} · {genres}
            </p>
            <p className="rate">
              <img src={starFilledImage} className="star" alt="별점" />
              <span>{movieDetail.vote_average.toFixed(1)}</span>
            </p>
            <hr />
            <p className="detail">{movieDetail.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}