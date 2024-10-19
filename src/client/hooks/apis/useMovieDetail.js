import { useEffect, useState } from 'react';
import { round } from '../../utils/round';

import fetchMovies from '@shared/apis/movies';
import { TMDB_ORIGINAL_URL } from '@shared/apis/constants';
import isServer from '@shared/isServer';

const DtoToMovieDetail = (dto) => ({
  title: dto.title,
  bannerUrl: TMDB_ORIGINAL_URL + dto.poster_path,
  releaseYear: dto.release_date.split('-')[0],
  description: dto.overview,
  genres: dto.genres.map(({ name }) => name),
  rate: round(dto.vote_average, 1),
});

export default function useMovieDetail({ initialMovieDetail, id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetail, setMovieDetail] = useState(
    isServer() ? DtoToMovieDetail(initialMovieDetail) : {}
  );

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        setIsLoading(true);
        const movieDetailDto = await fetchMovies.detail(id);
        setMovieDetail(DtoToMovieDetail(movieDetailDto));
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchMovieDetail();
    }
  }, [id]);

  return { movieDetail, isLoading };
}
