import { Router } from "express";

import { fetchMovieDetail, fetchMoviesPopular } from "../apis/movie";
import renderMovieHome from "../render/renderMovieHome";
import renderMovieDetail from "../render/renderMovieDetail";

const router = Router();

router.get("/", async (req, res) => {
  const popularMovies = await fetchMoviesPopular();

  const renderedHTML = renderMovieHome({ popularMovies, url: req.url });
  res.send(renderedHTML);
});

router.get("/detail/:movieId", async (req, res) => {
  const movieId = req.params.movieId;

  const popularMovies = await fetchMoviesPopular();
  const movieInfo = await fetchMovieDetail(movieId);

  const renderedHome = renderMovieHome({
    popularMovies,
    url: req.url,
    movieInfo,
  });

  const renderedMovieDetail = renderMovieDetail(renderedHome, movieInfo);

  res.send(renderedMovieDetail);
});

export default router;
