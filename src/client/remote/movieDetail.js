import {API_MOVIE_DETAIL_ENDPOINT, FETCH_OPTIONS} from '../constants/constants';

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
