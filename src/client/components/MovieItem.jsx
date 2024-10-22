import React from 'react';
import StarEmpty from '@images/star_empty.png';
import { round } from '../utils/round';
import { useNavigate } from 'react-router-dom';
import routes from '../router/routes';

const TMDB_THUMBNAIL_URL =
  'https://media.themoviedb.org/t/p/w440_and_h660_face/';

function MovieItem({
  movie: { vote_average: rate, title, poster_path: thumbnailUrl, id },
}) {
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + thumbnailUrl;

  const navigate = useNavigate();

  return (
    <div className="item" onClick={() => navigate(routes.movieDetail(id))}>
      <img className="thumbnail" src={thumbnailFullUrl} alt={title} />
      <div className="item-desc">
        <p className="rate">
          <img src={StarEmpty} className="star" />
          <span>{round(rate, 1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export default MovieItem;
