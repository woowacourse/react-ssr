import React from 'react';
import { TMDB_THUMBNAIL_URL } from '../../server/apis/url';

function Home({ movie }) {
  return (
    <li className="item">
      <img
        className="thumbnail"
        src={`${TMDB_THUMBNAIL_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="item-desc">
        <p className="rate">
          <img className="star" src="/assets/images/star_empty.png" />
          <span>{movie.vote_average.toFixed(1)}</span>
          <div>
            <span>{movie.title}</span>
          </div>
        </p>
      </div>
    </li>
  );
}

export default Home;
