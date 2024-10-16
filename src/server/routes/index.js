import { Router } from "express";

import { fetchMoviesPopular } from "../apis/movie";
import renderMovieHome from "../render/renderMovieHome";

const router = Router();

router.get("/", async (req, res) => {
  const popularMovies = await fetchMoviesPopular();

  const renderedHTML = renderMovieHome({ popularMovies, url: req.url });
  res.send(renderedHTML);
});

export default router;
