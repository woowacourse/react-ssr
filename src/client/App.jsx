import React from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';

function App({ movies }) {
	return (
		<div>
			<Header movies={movies} />
			<Home movies={movies} />
			<Footer />
		</div>
	);
}

export default App;
