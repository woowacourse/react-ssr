import { Router } from "express";

import { fetchMoviesPopular } from "../apis/movie";
import { parseMovieItems } from "../models/parseMovieItems";
import renderMovieHome from "../render/renderMovieHome";

const router = Router();

router.get("/", async (req, res) => {
  const popularMovies = await fetchMoviesPopular();
  const movieItems = parseMovieItems(popularMovies);
  const bestMovieItem = movieItems[0];

  const renderedHTML = renderMovieHome({
    movieItems,
    bestMovieItem,
    url: req.url,
  });

  res.send(renderedHTML);
});

export default router;
