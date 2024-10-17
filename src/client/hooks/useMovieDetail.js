import { useEffect, useState } from 'react';
import { fetchMovieDetail } from '../../server/apis/movies';

function useMovieDetail(initialMovieDetail, id) {
  const [movieDetail, setMovieDetail] = useState(initialMovieDetail);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isServerSideRendering = String(initialMovieDetail.id) === id;

    if (isServerSideRendering) return;

    let isMounted = true;
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await fetchMovieDetail(id);
        if (isMounted) {
          setMovieDetail(data);
        }
      } catch (error) {
        console.error('영화 상세 목록을 보여주는데 실패했습니다 :(', error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [id, initialMovieDetail]);

  return { movieDetail, isLoading };
}

export default useMovieDetail;
