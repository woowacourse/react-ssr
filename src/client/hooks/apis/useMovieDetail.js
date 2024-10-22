import { useEffect, useState } from 'react';
import { round } from '../../utils/round';

import { TMDB_ORIGINAL_URL } from '@shared/apis/constants';
import fetchMovies from '@shared/apis/movies';

const DtoToMovieDetail = (dto) => ({
  title: dto.title,
  bannerUrl: TMDB_ORIGINAL_URL + dto.poster_path,
  releaseYear: dto.release_date.split('-')[0],
  description: dto.overview,
  genres: dto.genres.map(({ name }) => name),
  rate: round(dto.vote_average, 1),
});

export default function useMovieDetail({ initialMovieDetail, id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState(() =>
    initialMovieDetail ? DtoToMovieDetail(initialMovieDetail) : null
  );

  useEffect(() => {
    const isClient = initialMovieDetail?.id !== id;

    const fetchMovieDetail = async () => {
      try {
        setIsLoading(true);
        const movieDetailDto = await fetchMovies.detail(id);
        setMovieDetail(DtoToMovieDetail(movieDetailDto));
      } finally {
        setIsLoading(false);
      }
    };

    if (isClient || id) {
      fetchMovieDetail();
    }
  }, [id]);

  return { movieDetail: movieDetail ?? {}, isLoading };
}
