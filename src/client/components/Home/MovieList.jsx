import React from "react";
import round from "../../../utils/round";
import starEmpty from "@images/star_empty.png";

const TMDB_THUMBNAIL_URL =
  "https://media.themoviedb.org/t/p/w440_and_h660_face/";

const getThumbnailUrl = (movie) => {
  return TMDB_THUMBNAIL_URL + movie.poster_path;
};

export default function MovieList({ movies }) {
  return (
    <ul id="movie-list" className="thumbnail-list">
      {movies.map(({ id, title, vote_average, poster_path }) => (
        <li key={id}>
          <a>
            <div className="item">
              <img
                className="thumbnail"
                src={getThumbnailUrl({ poster_path })}
                alt={title}
              />
              <div className="item-desc">
                <p className="rate">
                  <img src={starEmpty} className="star" />
                  <span>{round(vote_average, 1)}</span>
                </p>
                <strong>{title}</strong>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
