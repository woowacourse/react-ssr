import React, { useState, useEffect } from 'react';
import MainPage from './MainPage.jsx';
import Modal from '../components/Modal.jsx';
import { loadMovieDetail } from '../../server/fetch.js';
import { useParams } from 'react-router-dom';

function DetailPage({ movies, movieDetail }) {
	const [movie, setMovie] = useState(movieDetail);
	const movieId = useParams().id;

	useEffect(() => {
		loadMovieDetail(movieId).then((data) => setMovie(data));
	}, [movieDetail]);

	return (
		<>
			<MainPage movies={movies} />
			{movie && <Modal movie={movie} />}
		</>
	);
}

export default DetailPage;
