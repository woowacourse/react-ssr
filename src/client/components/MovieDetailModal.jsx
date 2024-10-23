import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovieDetail } from '../../server/api';
import useFetch from '../hooks/useFetch';

export default function MovieDetailModal({ movie }) {
  const navigate = useNavigate();
  const { id: movieId } = useParams();

  const { data: movieDetail, isPending, isError } = useFetch(movie, () => getMovieDetail(movieId));

  const renderModalContent = () => {
    if (movieDetail)
      return (
        <>
          <div className='modal-image'>
            <img src={`https://image.tmdb.org/t/p/original${movieDetail.thumbnail}`} />
          </div>
          <div className='modal-description'>
            <h2>{movieDetail.title}</h2>
            <p className='category'>
              {movieDetail.releaseYear} · {movieDetail.genres.join(', ')}
            </p>
            <p className='rate'>
              <img src='/static/images/star_empty.png' className='star' />
              <span>{movieDetail.rate}</span>
            </p>
            <hr />
            <p className='detail'>{movieDetail.description}</p>
          </div>
        </>
      );

    if (isPending) return <span>Loading...</span>;
    if (isError) return <span>잘못된 영화 정보입니다.</span>;
  };

  return (
    <div className='modal-background active'>
      <div className='modal'>
        <button className='close-modal' onClick={() => navigate('/')}>
          <img src='/static/images/modal_button_close.png' />
        </button>
        <div className='modal-container'>{renderModalContent()}</div>
      </div>
    </div>
  );
}
