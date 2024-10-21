import React from "react";
import StarEmptyImage from "@images/star_empty.png";
import { useNavigate } from "react-router-dom";

export default function MovieList({ movies }) {
  return (
    <main>
      <section id="movie-list" className="container">
        <h2>지금 인기 있는 영화</h2>
        <ul className="thumbnail-list">
          {movies.map((movie) => {
            const { id, rate, title, posterPath } = movie;
            return (
              <MovieItem
                key={id}
                id={id}
                rate={rate}
                title={title}
                posterPath={posterPath}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

function MovieItem({ id, rate, title, posterPath }) {
  const navigate = useNavigate();

  return (
    <li className="item" onClick={() => navigate(`/detail/${id}`)}>
      <img className="thumbnail" src={posterPath} alt={title} />
      <div className="item-desc">
        <p className="rate">
          <img src={StarEmptyImage} alt="별점 아이콘" className="star" />
          <span>{rate}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </li>
  );
}
