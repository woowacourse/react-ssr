import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TMDB_THUMBNAIL_URL } from '../../api/constants';

function MovieList({ movieList }) {
  const navigate = useNavigate();
  const handleNavigateToDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="container">
      <main>
        <section>
          <h2>지금 인기 있는 영화</h2>
          <ul className="thumbnail-list" id="thumbnail-list">
            {movieList.length > 0 ? (
              movieList.map(({ id, title, poster_path, vote_average }) => (
                <li key={id} onClick={() => handleNavigateToDetail(id)}>
                  <div className="item">
                    <img
                      className="thumbnail"
                      src={`${TMDB_THUMBNAIL_URL}${poster_path}`}
                      alt={title}
                    />
                    <div className="item-desc">
                      <p className="rate">
                        <img
                          src={'/assets/images/star_empty.png'}
                          className="star"
                        />
                        <span>{vote_average}</span>
                      </p>
                      <strong>{title}</strong>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <p>No movies available</p>
            )}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default MovieList;
