import React from "react";

export const round = (value, decimals = 0) => {
  const factor = 10 ** decimals;

  return Math.round(value * factor) / factor;
};

function Home({ movies }) {
  return (
    <div>
      <ul class="thumbnail-list">
        {movies.map((movie, index) => {
          const thumbnailUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
          const roundedRate = round(movie.vote_average, 1);
          return (
            <li class="movie-item" key={index}>
              {/*
            <a href={`/detail/${movie}`} class="item">
                          </a>
            */}
              <img class="thumbnail" src={thumbnailUrl} alt={movie.title} />
              <div class="movie-info">
                <p class="rate">
                  <img src="../assets/images/star_empty.png" class="star" />
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
