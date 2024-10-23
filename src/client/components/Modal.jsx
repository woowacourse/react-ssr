import React from 'react';
import { TMDB_ORIGINAL_URL } from '../constants';
import modalButtonClosePng from '@images/modal_button_close.png';
import starFilledPng from '@images/star_filled.png';

/**
 * @typedef {Object} MovieDetail
 * @property {boolean} adult - 성인 영화 여부
 * @property {string} backdrop_path - 배경 이미지 경로
 * @property {?Object} belongs_to_collection - 컬렉션 정보 (없을 경우 null)
 * @property {number} budget - 예산
 * @property {Genre[]} genres - 장르 목록
 * @property {string} homepage - 홈페이지 URL
 * @property {number} id - 영화 ID
 * @property {string} imdb_id - IMDb ID
 * @property {string[]} origin_country - 제작 국가
 * @property {string} original_language - 원어
 * @property {string} original_title - 원제
 * @property {string} overview - 영화 개요
 * @property {number} popularity - 인기 지수
 * @property {string} poster_path - 포스터 이미지 경로
 * @property {ProductionCompany[]} production_companies - 제작사 목록
 * @property {ProductionCountry[]} production_countries - 제작 국가 정보
 * @property {string} release_date - 개봉일
 * @property {number} revenue - 수익
 * @property {number} runtime - 상영 시간 (분)
 * @property {Language[]} spoken_languages - 사용 언어 목록
 * @property {string} status - 영화 상태
 * @property {string} tagline - 태그라인
 * @property {string} title - 영화 제목
 * @property {boolean} video - 비디오 여부
 * @property {number} vote_average - 평균 평점
 * @property {number} vote_count - 투표 수
 */

/**
 * @typedef {Object} ModalProps
 * @property {MovieDetail} movieDetail
 * @property {()=>void} onClose
 */

/**
 *
 * @param {ModalProps} ModalProps
 * @returns {React.JSX.Element}
 */
export function Modal({ movieDetail, onClose }) {
  return (
    <div className='modal-background active' id='modalBackground'>
      <div className='modal'>
        <button className='close-modal' id='closeModal' onClick={onClose}>
          <img src={modalButtonClosePng} />
        </button>
        <div className='modal-container'>
          <div className='modal-image'>
            <img src={`${TMDB_ORIGINAL_URL}${movieDetail.poster_path}`} />
          </div>
          <div className='modal-description'>
            <h2>{movieDetail.title}</h2>
            <p className='category'>
              {`${movieDetail.release_date.slice(0, 4)} · ${movieDetail.genres
                .map(genre => genre.name)
                .join(',')}`}
            </p>
            <p className='rate'>
              <img src={starFilledPng} className='star' />
              <span>{movieDetail.vote_average.toFixed(1)}</span>
            </p>
            <hr />
            <p className='detail'>
              {movieDetail.overview || '설명이 존재하지 않습니다.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
