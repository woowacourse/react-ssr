import { useEffect, useState } from 'react';
import { fetchMovieDetail } from '../../server/apis/movies';

function useMovieDetail(initialMovieDetail, id) {
  const [movieDetail, setMovieDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await fetchMovieDetail(id);
        if (isMounted) {
          setMovieDetail(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('영화 상세 목록을 보여주는데 실패했습니다 :(', error);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if (id) {
      fetchData();
    } else {
      setMovieDetail(initialMovieDetail);
      setIsLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [id, initialMovieDetail]);

  return { movieDetail, isLoading };
}

export default useMovieDetail;
