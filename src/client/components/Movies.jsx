import React from "react";

export default function Movies({ movies }) {
  return (
    <ul className="thumbnail-list">
      {movies.map(({ id, title, rate, thumbnail }) => (
        <li key={id}>
          <div className="item">
            <img
              className="thumbnail"
              src={`https://media.themoviedb.org/t/p/w440_and_h660_face${thumbnail}`}
              alt={title}
            />
            <div className="item-desc">
              <p className="rate">
                <img src="./static/images/star_empty.png" className="star" />
                <span>{rate}</span>
              </p>
              <strong>{title}</strong>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
