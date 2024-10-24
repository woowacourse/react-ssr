import React from "react";
import App from "../../client/App";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { getPopularMovies, getMovieDetail } from "../../apis/movies";
import { getInnerHTML } from "../../client/utils/template";

const getBestMovieData = (movies) => {
  return movies.reduce(
    (best, movie) => (movie.vote_average > best.vote_average ? movie : best),
    movies[0]
  );
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

export const renderMovieDetail = async (req, res) => {
  const movieId = req.params.id;

  try {
    const popularMovies = await getPopularMovies();
    const bestMovie = await getBestMovie(popularMovies);
    const movieDetail = await getMovieDetail(movieId);

    const renderedApp = renderToString(
      <StaticRouter location={req.url}>
        <App
          movies={popularMovies}
          bestMovie={bestMovie}
          movieDetail={movieDetail}
        />
      </StaticRouter>
    );

    const renderedHTML = getInnerHTML(renderedApp, [
      { movies: popularMovies },
      { bestMovie },
      { movieDetail },
    ]);

    res.send(renderedHTML);
  } catch (error) {
    console.log(error.message);
  }
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

    const renderedHTML = getInnerHTML(renderedApp, [
      { movies: popularMovies },
      { bestMovie },
    ]);

    res.send(renderedHTML);
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).send("Server Error");
  }
};
