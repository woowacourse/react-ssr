import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TMDB_THUMBNAIL_URL } from '../../server/src/constants';
import { formatVoteAverageString } from '../../server/src/utils';
import starEmptyImage from '@images/star_empty.png';

function MovieItem({ movie: { id, title, vote_average: voteAverage, poster_path: PosterPath } }) {
  const navigate = useNavigate();
  const thumbnailUrl = `${TMDB_THUMBNAIL_URL}${PosterPath}`;

  return (
    <article className='item' onClick={() => navigate(`/detail/${id}`)}>
      <img className='thumbnail' src={thumbnailUrl} alt={title} />
      <div className='item-desc'>
        <p className='rate'>
          <img src={starEmptyImage} className='star' />
          <span>{formatVoteAverageString(voteAverage)}</span>
        </p>
        <h3>{title}</h3>
      </div>
    </article>
  );
}

export default MovieItem;
