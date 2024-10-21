import { useState, useEffect } from "react";
import { fetchMovieDetailData } from "../../server/apis/movies";

export default function useMovieDetailData({ initialMovieDetail, movieId }) {
  const [movieDetailData, setMovieDetailData] = useState(initialMovieDetail);

  useEffect(() => {
    const getMovieDetailData = async () => {
      const movieDetailData = await fetchMovieDetailData({ movieId });
      setMovieDetailData(movieDetailData);
    };

    getMovieDetailData();
  }, [initialMovieDetail, movieId]);

  return { movieDetailData };
}
