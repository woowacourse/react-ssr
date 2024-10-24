import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TMDB_ORIGINAL_URL } from '../../server/src/constants';
import { formatVoteAverageString } from '../../server/src/utils';
import { getMovieDetails } from '../../server/src/apis';

const useMovieDetailModal = () => {
  const { id } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [movieDetail, setMovieDetail] = useState({
    title: '',
    bannerUrl: '',
    releaseYear: 0,
    description: '',
    genres: [],
    rate: 0,
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const updateMovieDetail = async (id) => {
    const movieDetail = await getMovieDetails(id);

    setMovieDetail({
      title: movieDetail.title,
      bannerUrl: TMDB_ORIGINAL_URL + movieDetail.poster_path,
      releaseYear: movieDetail.release_date.split('-')[0],
      description: movieDetail.overview,
      genres: movieDetail.genres.map(({ name }) => name),
      rate: formatVoteAverageString(movieDetail.vote_average),
    });
  };

  useEffect(() => {
    updateMovieDetail(id);
  }, [id]);

  return {
    isModalOpen,
    toggleModal,
    movieDetail,
  };
};

export default useMovieDetailModal;
