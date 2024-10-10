import React from "react";
import round from "../../utils/round";

const TMDB_THUMBNAIL_URL =
  "https://media.themoviedb.org/t/p/w440_and_h660_face/";

const getThumbnailUrl = (movie) => {
  return TMDB_THUMBNAIL_URL + movie.poster_path;
};

export default function MovieList({ movies }) {
  return (
    <React.Fragment>
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
                  <img
                    src="../../assets/images/star_empty.png"
                    className="star"
                  />
                  <span>{round(vote_average, 1)}</span>
                </p>
                <strong>{title}</strong>
              </div>
            </div>
          </a>
        </li>
      ))}
    </React.Fragment>
  );
}
