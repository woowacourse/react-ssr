import React from "react";
import { useNavigate } from "react-router-dom";

const MovieItems = ({ movieItems }) => {
  const navigate = useNavigate();

  const handleClickMovie = (movieId) => {
    navigate(`detail/${movieId}`);
  };

  return (
    <>
      {movieItems.map(({ id, title, thumbnail, rate }) => (
        <li key={id} onClick={() => handleClickMovie(id)}>
          <div className="item">
            <img
              className="thumbnail"
              src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${thumbnail}`}
              alt={title}
            />
            <div className="item-desc">
              <p className="rate">
                <img src="/static/images/star_empty.png" className="star" />
                <span>{rate}</span>
              </p>
              <strong>{title}</strong>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default MovieItems;
