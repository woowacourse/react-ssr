import { FETCH_OPTIONS } from '../client/constants';

export const loadMovies = async (url) => {
	const response = await fetch(url, FETCH_OPTIONS);
	const data = await response.json();

	return data.results;
};

export const loadMovieDetail = async (id) => {
	const url = TMDB_MOVIE_DETAIL_URL + id;
	const params = new URLSearchParams({
		language: 'ko-KR',
	});
	const response = await fetch(url + '?' + params, FETCH_OPTIONS);

	return await response.json();
};
