import { Router } from 'express';

import { getMovies, getMovieDetail } from '../apis/movie.js';
import { TMDB_MOVIE_LISTS, TMDB_MOVIE_DETAIL_URL } from '../constants/index.js';

const router = Router();

router.get('/movies', async (_, res) => {
  try {
    const movies = await getMovies(TMDB_MOVIE_LISTS.nowPlaying);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: '영화 목록 불러오기에 실패했습니다.' });
  }
});

router.get('/movie/:id', async (req, res) => {
  try {
    const movieDetail = await getMovieDetail(
      TMDB_MOVIE_DETAIL_URL + req.params.id + '?language=ko-KR'
    );
    res.json(movieDetail);
  } catch (error) {
    res.status(500).json({ error: '영화 상세 정보 불러오기에 실패했습니다.' });
  }
});

export default router;
