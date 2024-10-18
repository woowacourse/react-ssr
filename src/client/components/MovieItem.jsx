import React from 'react';

const TMDB_THUMBNAIL_URL = 'https://media.themoviedb.org/t/p/w440_and_h660_face';

function MovieItem({ movie }) {
  const { title, poster_path, vote_average } = movie;

  return (
    <li className="item">
      <img className="thumbnail" src={TMDB_THUMBNAIL_URL + poster_path} alt={title} />
      <div className="item-desc">
        <p className="rate">
          <img src="./static/images/star_empty.png" className="star" alt="star" />
          <span>{vote_average.toFixed(1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </li>
  );
}

export default MovieItem;
