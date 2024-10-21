import React, { useEffect, useState } from 'react';
import ModalButtonCloseImage from '@images/modal_button_close.png';
import StarFilledImage from '@images/star_filled.png';
import { TMDB_MOVIE_DETAIL_URL } from '../constants.js';
import { FETCH_OPTIONS } from '../../server/constants.js';
import { useParams } from 'react-router-dom';

const MovieDetailModal = ({ movie }) => {
  const [movieData, setMovieData] = useState(movie);
  const { id } = useParams();

  const parseMovieDetail = (movieDetail) => {
    return {
      id: movieDetail.id,
      rate: movieDetail.vote_average,
      genres: movieDetail.genres,
      background: movieDetail.backdrop_path,
      releaseDate: movieDetail.release_date,
      ...movieDetail,
    };
  };

  useEffect(() => {
    const fetchMovieDetail = async (id) => {
      const fetchUrl = `${TMDB_MOVIE_DETAIL_URL}${id}`;
      const response = await fetch(fetchUrl, FETCH_OPTIONS);
      const data = await response.json();

      setMovieData(parseMovieDetail(data));
    };

    fetchMovieDetail(id);
  }, [id]);

  if (!movieData) return <div>loading</div>;

  return (
    <div className='modal-background active' id='modalBackground'>
      <div className='modal'>
        <button className='close-modal' id='closeModal'>
          <img src={ModalButtonCloseImage} />
        </button>
        <div className='modal-container'>
          <div className='modal-image'>
            <img src={`https://image.tmdb.org/t/p/original/${movieData.background}`} />
          </div>
          <div className='modal-description'>
            <h2>{movieData.title}</h2>
            <p className='category'>{`${movieData.releaseDate.split('-')[0]} - ${movieData.genres
              .map(({ name }) => name)
              .join(', ')}`}</p>
            <p className='rate'>
              <img src={StarFilledImage} className='star' />
              <span>{movieData['vote_average']}</span>
            </p>
            <hr />
            <p className='detail'>{movieData.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailModal;
