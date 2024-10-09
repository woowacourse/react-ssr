import React from "react";
import starEmptyImage from "@images/star_empty.png";

const MovieItem = ({ movie }) => {
  const { thumbnail, rate, title, id } = movie;

  return (
    <li>
      <a href={`/detail/${id}`}>
        <div className="item">
          <img
            className="thumbnail"
            src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${thumbnail}`}
            alt={title}
          />
          <div className="item-desc">
            <p className="rate">
              <img src={starEmptyImage} className="star" />
              <span>{rate.toFixed(1)}</span>
            </p>
            <strong>{title}</strong>
          </div>
        </div>
      </a>
    </li>
  );
};

export default MovieItem;
