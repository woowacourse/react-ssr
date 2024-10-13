import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../client/App";
import { FETCH_OPTIONS } from "../../constants/fetch";
import { TMDB_MOVIE_LISTS } from "../../constants/tmdb";
import TopRatedMovieView from "../../client/components/topRatedMovie/TopRatedMovieView";
import MovieItem from "../../client/components/MovieItem";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

const loadMovies = async (url) => {
  const response = await fetch(url, FETCH_OPTIONS);
  const data = await response.json();

  return data.results;
};

const getTopRateMovie = (movies) => {
  const topRateMovie = movies.reduce((highest, movie) => {
    return movie.vote_average > highest.vote_average ? movie : highest;
  }, movies[0]);

  return topRateMovie;
};

router.get("/", async (_, res) => {
  const templatePath = path.join(__dirname, "../../../views", "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const popularMovies = await loadMovies(TMDB_MOVIE_LISTS.popular);

  const topRatedMovie = getTopRateMovie(popularMovies);

  const topRatedMovieHTML = renderToString(<TopRatedMovieView movie={topRatedMovie} />);

  const movieListHTML = renderToString(
    <>
      {popularMovies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </>
  );

  const renderedHTML = template
    .replace("<!--${TOP_RATED_MOVIE_PLACEHOLDER}-->", topRatedMovieHTML)
    .replace("<!--${MOVIE_ITEMS_PLACEHOLDER}-->", movieListHTML);

  res.send(renderedHTML);
});

export default router;
