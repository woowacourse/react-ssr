import { useEffect } from 'react';
import MovieItem from './base/MovieItem';
import useMovies from '../hooks/useMovies';
import React from 'react';

function Home({ movies }) {
	const { popularMovies, loadMovies } = useMovies();

	useEffect(() => {
		loadMovies();
	}, []);

	return (
		<div className="container">
			<main>
				<section>
					<h2>지금 인기 있는 영화</h2>
					<ul className="thumbnail-list">
						{movies.map(({ id, title, vote_average, poster_path }) => (
							<li key={id}>
								<MovieItem rate={vote_average} title={title} thumbnailUrl={poster_path} />
							</li>
						))}
					</ul>
				</section>
			</main>
		</div>
	);
}

export default Home;
