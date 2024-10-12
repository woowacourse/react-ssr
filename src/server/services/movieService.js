import {FETCH_OPTIONS, API_MOVIE_DETAIL_ENDPOINT, API_MOVIE_ENDPOINTS} from '../constants/constants';

async function handleFetchError(response) {
  if (!response.ok) {
    throw new Error(`HTTP 요청에 실패했습니다. : ${response.status}`);
  }
  return await response.json();
}

function handleApiError(error, errorMessage) {
  console.error(errorMessage, error);
  return [];
}

export async function getMovies(endpoint) {
  try {
    const params = new URLSearchParams({
      language: 'ko-KR',
      page: '1',
    });
    const url = `${API_MOVIE_ENDPOINTS[endpoint]}?${params}`;
    const response = await fetch(url, FETCH_OPTIONS);
    const data = await handleFetchError(response);
    return data.results;
  } catch (error) {
    return handleApiError(error, '영화 목록을 불러오는데 실패했습니다. :');
  }
}

export async function getMovieDetail(id) {
  try {
    const params = new URLSearchParams({
      language: 'ko-KR',
    });
    const url = `${API_MOVIE_DETAIL_ENDPOINT}${id}?${params}`;
    const response = await fetch(url, FETCH_OPTIONS);
    const data = await handleFetchError(response);
    return data;
  } catch (error) {
    return handleApiError(error, '영화 상세 정보를 불러오는데 실패했습니다. :');
  }
}
