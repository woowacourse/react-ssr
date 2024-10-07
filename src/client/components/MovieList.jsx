import React from "react";
import { getThumbnailUrl } from "../../api/tmdb";
import round from "../../utils/round";

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
