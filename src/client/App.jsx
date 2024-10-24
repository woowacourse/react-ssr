import React from 'react';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import { Routes, Route } from 'react-router-dom';

function App({ movies, movieDetail }) {
	return (
		<Routes>
			<Route path="/" element={<MainPage movies={movies} />} />
			<Route path="/detail/:id" element={<DetailPage movies={movies} movieDetail={movieDetail} />} />
		</Routes>
	);
}

export default App;
