import React from 'react';
import { TMDB_BANNER_URL } from '../constants';
import { round } from '../utils';
import starEmptyImage from '@images/star_empty.png';
import logo from '@images/logo.png';

function Header({ popularMovie }) {
	const { id, title, vote_average, backdrop_path } = popularMovie;

	const bannerUrl = TMDB_BANNER_URL + backdrop_path;

	return (
		<header>
			<div className="background-container" style={{ backgroundImage: `url('${bannerUrl}')` }}>
				<div className="overlay" aria-hidden="true"></div>
				<div className="top-rated-container">
					<h1 className="logo">
						<img src={logo} alt="MovieList" />
					</h1>
					<div className="top-rated-movie">
						<div className="rate">
							<img src={starEmptyImage} className="star" /> <span className="rate-value">{round(vote_average, 1)}</span>
						</div>
						<div className="title">{title}</div>
						{/* <a href={`/detail/${id}`}> */}
						<button className="primary detail">자세히 보기</button>
						{/* </a> */}
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
