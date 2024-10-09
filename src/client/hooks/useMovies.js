import { useAtom } from 'jotai';
import { popularMoviesAtom } from '../atoms';
import { fetchPopularMovies } from '../api';

const useMovies = () => {
	const [popularMovies, setPopularMovies] = useAtom(popularMoviesAtom);

	const loadMovies = async () => {
		const data = await fetchPopularMovies();

		setPopularMovies(data.results);
	};

	return {
		popularMovies,
		loadMovies,
	};
};

export default useMovies;
