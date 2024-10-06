import { TMDB_MOVIE_LISTS } from '../constants.js';
import fetchJsonData from './fetchJsonData.js';

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
 * @returns {Promise<Movie[]>} 영화 응답 데이터
 */
const getPopularMovies = async () => {
  const response = await fetchJsonData(TMDB_MOVIE_LISTS.popular);
  return response.results;
};

/**
 * @returns {Promise<Movie[]>} 영화 응답 데이터
 */
const getNowPlayingMovies = async () => {
  const response = await fetchJsonData(TMDB_MOVIE_LISTS.nowPlaying);
  return response.results;
};

/**
 * @returns {Promise<Movie[]>} 영화 응답 데이터
 */
const getTopRatedMovies = async () => {
  const response = await fetchJsonData(TMDB_MOVIE_LISTS.topRated);
  return response.results;
};

/**
 * @returns {Promise<Movie[]>} 영화 응답 데이터
 */
const getUpcomingMovies = async () => {
  const response = await fetchJsonData(TMDB_MOVIE_LISTS.upcoming);
  return response.results;
};

/**
 * @typedef {Object} getMovies
 * @property {function(): Promise<Movie[]>} popular - 인기 영화 가져오기 함수
 * @property {function(): Promise<Movie[]>} nowPlaying - 현재 상영 중인 영화 가져오기 함수
 * @property {function(): Promise<Movie[]>} topRated - 평점 높은 영화 가져오기 함수
 * @property {function(): Promise<Movie[]>} upcoming - 개봉 예정 영화 가져오기 함수
 */

/**
 * @type {getMovies}
 */
const getMovies = {
  popular: getPopularMovies,
  nowPlaying: getNowPlayingMovies,
  topRated: getTopRatedMovies,
  upcoming: getUpcomingMovies,
};

export default getMovies;
