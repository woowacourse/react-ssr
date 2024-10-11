import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { FETCH_OPTIONS, TMDB_MOVIE_LISTS } from "../constants/constants";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../client/App";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getBestMovie = (movies) => {
  return movies.reduce(
    (best, movie) => (movie.vote_average > best.vote_average ? movie : best),
    movies[0]
  );
};

export const renderMoviesPage = async (_, res) => {
  try {
    const response = await fetch(
      TMDB_MOVIE_LISTS["NOW_PLAYING"],
      FETCH_OPTIONS
    );

    const moviesData = await response.json();
    const popularMovies = moviesData.results;
  
    const bestMovieData = getBestMovie(moviesData.results);
    const bestMovie = {
      id: bestMovieData.id,
      title: bestMovieData.title,
      vote_average: bestMovieData.vote_average.toFixed(1),
      backdrop_path: bestMovieData.backdrop_path,
    };
  
    const renderedApp = renderToString(
      <App movies={popularMovies} bestMovie={bestMovie} />
    );
    const templatePath = path.resolve(__dirname, "../../../views/index.html");
    const template = fs.readFileSync(templatePath, "utf8");
    const renderedHTML = template
      .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
      .replace(
        "<!--${INIT_DATA_AREA}-->",
        /*html*/ `
        <script>
          window.__INITIAL_DATA__ = {
            movies: ${JSON.stringify(popularMovies)},
            bestMovie: ${JSON.stringify(bestMovie)}
          }
        </script>
        `
      );
  
    res.send(renderedHTML);
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).send("Server Error");
  }
};
