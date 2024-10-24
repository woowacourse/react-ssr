import React from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';

function MainPage({ movies }) {
	return (
		<>
			<Header popularMovie={movies[0]} />
			<Container movies={movies} />
			<Footer />
		</>
	);
}

export default MainPage;
