import React from "react";

export const round = (value, decimals = 0) => {
  const factor = 10 ** decimals;

  return Math.round(value * factor) / factor;
};

function Home({ movies }) {
  return (
    <div>
      <ul className="thumbnail-list">
        {movies.map((movie, index) => {
          const thumbnailUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
          const roundedRate = round(movie.vote_average, 1);
          return (
            <li className="movie-item" key={index}>
              {/*
            <a href={`/detail/${movie}`} class="item">
                          </a>
            */}
              <img className="thumbnail" src={thumbnailUrl} alt={movie.title} />
              <div className="movie-info">
                <p className="rate">
                  <img src="../assets/images/star_empty.png" className="star" />
                  <span>{roundedRate}</span>
                </p>
                <strong>{movie.title}</strong>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
