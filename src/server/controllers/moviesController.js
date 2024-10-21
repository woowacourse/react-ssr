import fs from "fs";
import path from "path";
import React from "react";
import {
  FETCH_OPTIONS,
  TMDB_MOVIE_DETAIL_URL,
  TMDB_MOVIE_LISTS,
} from "../constants/constants";
import App from "../../client/App";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

const getBestMovieData = (movies) => {
  return movies.reduce(
    (best, movie) => (movie.vote_average > best.vote_average ? movie : best),
    movies[0]
  );
};

const getMovieDetailUrl = (movieId) => {
  return TMDB_MOVIE_DETAIL_URL + `${movieId}?language=ko-KR`;
};

export const renderMovieDetail = async (req, res) => {
  const movieId = req.params.id;

  try {
    const popularMovies = await getPopularMovies();
    const bestMovie = await getBestMovie(popularMovies);

    const response = await fetch(getMovieDetailUrl(movieId), FETCH_OPTIONS);

    if (!response.ok) {
      console.error("Fetch failed:", response.status, response.statusText);
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    const movieDetailData = await response.json();

    const renderedApp = renderToString(
      <StaticRouter location={req.url}>
        <App
          movies={popularMovies}
          bestMovie={bestMovie}
          movieDetail={movieDetailData}
        />
      </StaticRouter>
    );

    const templatePath = path.resolve(__dirname, "index.html");
    const template = fs.readFileSync(templatePath, "utf8");

    const renderedHTML = template
      .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
      .replace(
        "<!--${INIT_DATA_AREA}-->",
        /*html*/ `
      <script>
        window.__INITIAL_DATA__ = {
          movies: ${JSON.stringify(popularMovies)},
          bestMovie: ${JSON.stringify(bestMovie)},
          movieDetail: ${JSON.stringify(movieDetailData)}
        }
      </script>
      `
      );

    res.send(renderedHTML);
  } catch (error) {
    console.log(error.message);
  }
};

const getPopularMovies = async () => {
  try {
    const response = await fetch(
      TMDB_MOVIE_LISTS["NOW_PLAYING"],
      FETCH_OPTIONS
    );

    const moviesData = await response.json();
    return moviesData.results;
  } catch (error) {
    console.log(error.message);
  }
};

const getBestMovie = async (moviesData) => {
  const bestMovieData = getBestMovieData(moviesData);
  const bestMovie = {
    id: bestMovieData.id,
    title: bestMovieData.title,
    vote_average: bestMovieData.vote_average.toFixed(1),
    backdrop_path: bestMovieData.backdrop_path,
  };

  return bestMovie;
};

export const renderMoviesPage = async (req, res) => {
  try {
    const popularMovies = await getPopularMovies();
    const bestMovie = await getBestMovie(popularMovies);

    const renderedApp = renderToString(
      <StaticRouter location={req.url}>
        <App movies={popularMovies} bestMovie={bestMovie} />
      </StaticRouter>
    );
    const templatePath = path.resolve(__dirname, "index.html");
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
