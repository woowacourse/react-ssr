import React from "react";
import { TMDB_THUMBNAIL_URL } from "../../../../server/constant";
import { useNavigate } from "react-router-dom";

const Container = ({ movies }) => {
  const navigate = useNavigate();

  const handleMovieItemClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="container">
      <main>
        <section>
          <h2>지금 인기 있는 영화</h2>
          <ul className="thumbnail-list">
            {movies.map(({ id, title, poster_path, vote_average }) => (
              <li key={id} onClick={() => handleMovieItemClick(id)}>
                <div className="item">
                  <img
                    className="thumbnail"
                    src={`${TMDB_THUMBNAIL_URL}${poster_path}`}
                    alt={title}
                  />
                  <div className="item-desc">
                    <p className="rate">
                      <img
                        src="/static/images/star_empty.png"
                        className="star"
                      />
                      <span>{vote_average.toFixed(1)}</span>
                    </p>
                    <strong>{title}</strong>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Container;
