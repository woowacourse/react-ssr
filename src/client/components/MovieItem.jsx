import React from 'react';

const TMDB_THUMBNAIL_URL = 'https://media.themoviedb.org/t/p/w440_and_h660_face';

function MovieItem({ title, thumbnailUrl, rate }) {
  return (
    <div className="item">
      <img className="thumbnail" src={TMDB_THUMBNAIL_URL + thumbnailUrl} alt={title} />
      <div className="item-desc">
        <p className="rate">
          <img src="/assets/images/star_filled.png" className="star" alt="star" />
          <span>{rate.toFixed(1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export default MovieItem;
