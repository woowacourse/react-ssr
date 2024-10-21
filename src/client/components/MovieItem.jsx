import React from 'react';
import { TMDB_THUMBNAIL_URL } from '../constants';
import { round } from '../utils';
import starEmptyImage from '@images/star_empty.png';
import { useNavigate } from 'react-router-dom';

function MovieItem({ rate, title, thumbnailUrl, movieId }) {
	const thumbnailFullUrl = TMDB_THUMBNAIL_URL + '/' + thumbnailUrl;

	const navigate = useNavigate();

	return (
		<div className="item" onClick={() => navigate(`/detail/${movieId}`)}>
			<img className="thumbnail" src={thumbnailFullUrl} alt={title} />
			<div className="item-desc">
				<p className="rate">
					<img src={starEmptyImage} className="star" />
					<span>{round(rate, 1)}</span>
				</p>
				<strong>{title}</strong>
			</div>
		</div>
	);
}

export default MovieItem;
