import React from "react";

function MovieItem({ id, title, poster_path, vote_average = 0 }) {
  return (
    <a href={`/detail/${id}`}>
      <div className="item">
        <img
          className="thumbnail"
          src={`https://image.tmdb.org/t/p/w440_and_h660_face/${poster_path}`}
          alt={title}
        />
        <div className="item-desc">
          <p className="rate">
            <img src="../assets/images/star_empty.png" className="star" />
            <span>{Number(vote_average).toFixed(1)}</span>
          </p>
          <strong>{title}</strong>
        </div>
      </div>
    </a>
  );
}

export default MovieItem;
