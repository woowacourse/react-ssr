import React from "react";
import { TMDB_THUMBNAIL_URL } from "../../server/constant";

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map(({ id, title, backdrop_path, vote_average }) => (
        <li key={id}>
          <a href={`/detail/${id}`}>
            <div className="item">
              <img
                className="thumbnail"
                src={TMDB_THUMBNAIL_URL + backdrop_path}
                alt={title}
              />
              <div className="item-desc">
                <p className="rate">
                  <img
                    src="../assets/images/star_empty.png"
                    className="star"
                  />
                  <span>{vote_average}</span>
                </p>
                <strong>{title}</strong>
              </div>
            </div>
          </a>
        </li>
      ))}
    </>
  );
};

export default MovieList;
