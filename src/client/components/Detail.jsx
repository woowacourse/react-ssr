import React, { useEffect, useState } from 'react';
import { TMDB_BANNER_URL } from '../../api/constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchMovieDetail } from '../../api/movieRequests';

export default function Detail({ movieDetail: initMovieDetail }) {
  const { pathname } = useLocation();
  const [movieDetail, setMovieDetail] = useState(initMovieDetail ?? null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovieDetail = async () => {
      const data = await fetchMovieDetail(pathname.split('/detail/')[1]);
      setMovieDetail(data);
    };
    if (!movieDetail) {
      getMovieDetail();
    }
  }, []);

  if (!movieDetail || movieDetail.length === 0) {
    return (
      <div className="modal-background active" id="modalBackground">
        <div className="modal">
          <p>영화 정보가 없습니다.</p>
        </div>
      </div>
    );
  }

  const { title, release_date, genres, vote_average, overview, poster_path } =
    movieDetail;

  const handleModalClose = () => {
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
              {release_date} · {genres.map((genre) => genre.name).join(', ')}
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
