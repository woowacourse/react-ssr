import { useState, useEffect } from "react";
import { fetchMovieDetailData } from "../../server/apis/movies";

export default function useMovieDetailData({ initialMovieDetail, movieId }) {
  const [movieDetailData, setMovieDetailData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialMovieDetail?.id === movieId) {
      setMovieDetailData(initialMovieDetail);
      return;
    }

    setIsLoading(true);
    setMovieDetailData(null);

    const getMovieDetailData = async () => {
      const movieDetailData = await fetchMovieDetailData({ movieId });
      setMovieDetailData(movieDetailData);
    };

    getMovieDetailData();
    setIsLoading(false);
  }, [initialMovieDetail, movieId]);

  return { isLoading, movieDetailData };
}
