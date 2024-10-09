import React from 'react';

const Header = ({ movies }) => {
	const firstMovie = movies[0];

	return (
		<header>
			<div
				className="background-container"
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${firstMovie.backdrop_path})`,
				}}
			>
				<div className="overlay" aria-hidden="true"></div>
				<div className="top-rated-container">
					<h1 className="logo">
						<img src="/static/images/logo.png" alt="MovieList" />
					</h1>
					<div className="top-rated-movie">
						<div className="rate">
							<img src="/static/images/star_empty.png" className="star" />
							<span className="rate-value">{firstMovie.vote_average.toFixed(1)}</span>
						</div>
						<div className="title">{firstMovie.title}</div>
						<button className="primary detail">자세히 보기</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
