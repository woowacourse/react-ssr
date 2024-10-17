/**
 * @typedef {Object} Movie
 * @property {boolean} adult - 성인 여부
 * @property {string} backdrop_path - 배경 이미지 경로
 * @property {number[]} genre_ids - 장르 ID 배열
 * @property {number} id - 영화 ID
 * @property {string} original_language - 원래 언어
 * @property {string} original_title - 원제
 * @property {string} overview - 영화 개요
 * @property {number} popularity - 인기 지수
 * @property {string} poster_path - 포스터 이미지 경로
 * @property {string} release_date - 개봉일
 * @property {string} title - 제목
 * @property {boolean} video - 비디오 여부
 * @property {number} vote_average - 평균 평점
 * @property {number} vote_count - 평점 수
 */

/**
 * @typedef {Movie} mockedMovie
 */
export const emptyMovie = {
  adult: false,
  backdrop_path: '',
  genre_ids: [],
  id: 0,
  original_language: '',
  original_title: '',
  overview: '',
  popularity: 0,
  poster_path: '',
  release_date: '',
  title: '',
  video: false,
  vote_average: 0,
  vote_count: 0,
};
