import React from "react";

const MovieItems = ({ movieItems }) => {
  return (
    <>
      {movieItems.map(({ id, title, thumbnail, rate }) => (
        <li key={id}>
          <a href={`/detail/${id}`}>
            <div className="item">
              <img
                className="thumbnail"
                src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${thumbnail}`}
                alt={title}
              />
              <div className="item-desc">
                <p className="rate">
                  <img src="/assets/images/star_empty.png" className="star" />
                  <span>{rate}</span>
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

export default MovieItems;
