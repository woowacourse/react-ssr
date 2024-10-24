import React from 'react';
import starEmptyImage from '@images/star_empty.png';
import closeButtonImage from '@images/modal_button_close.png';
import { TMDB_ORIGINAL_URL } from '../constants';
import { useNavigate } from 'react-router-dom';

function Modal({ movie }) {
	const { poster_path, title, release_date, genres, overview, vote_average } = movie;
	const navigate = useNavigate();

	return (
		<div className="modal-background active" id="modalBackground">
			<div className="modal">
				<button className="close-modal" id="closeModal" onClick={() => navigate('/')}>
					<img src={closeButtonImage} />
				</button>

				<div className="modal-container">
					<div className="modal-image">
						<img src={`${TMDB_ORIGINAL_URL}${poster_path}`} />
					</div>
					<div className="modal-description">
						<h2>{title}</h2>
						<p class="category">
							{release_date.substring(0, 4)} · {genres.map((genre) => genre.name).join(', ')}
						</p>
						<p className="rate">
							<img src={starEmptyImage} className="star" />
							<span>{vote_average.toFixed(1)}</span>
						</p>
						<hr />
						<p className="detail">{overview}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Modal;
