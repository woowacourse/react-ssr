import React from "react";

const Container = ({ movies }) => {
  return (
    <div className="container">
      <main>
        <section>
          <h2>지금 인기 있는 영화</h2>
          <ul className="thumbnail-list">
            {movies.map(({ id, title, poster_path, vote_average }) => (
              <li key={id} onClick={() => console.log(id)}>
                <a href={`/detail/${id}`}>
                  <div className="item">
                    <img
                      className="thumbnail"
                      src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`}
                      alt={title}
                    />
                    <div className="item-desc">
                      <p className="rate">
                        <img
                          src="../../assets/images/star_empty.png"
                          className="star"
                        />
                        <span>{vote_average.toFixed(1)}</span>
                      </p>
                      <strong>{title}</strong>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Container;
