import React from "react";
import { TMDB_THUMBNAIL_URL } from "../../constants";

const round = (value, decimals = 0) => {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
};

function MovieItem({ rate, title, thumbnailUrl, onClick }) {
  const thumbnailFullUrl = TMDB_THUMBNAIL_URL + "/" + thumbnailUrl;

  return (
    <div className="item" onClick={onClick}>
      <img className="thumbnail" src={thumbnailFullUrl} alt={title} />
      <div className="item-desc">
        <p className="rate">
          <img src={"/assets/images/star_empty.png"} className="star" />
          <span>{round(rate, 1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export default function Movies({ initData }) {
  return (
    <>
      {initData?.movies.map(({ id, title, vote_average, poster_path }) => (
        <li key={id}>
          <MovieItem rate={vote_average} title={title} thumbnailUrl={poster_path} />
        </li>
      ))}
    </>
  );
}
