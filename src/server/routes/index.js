import React from "react";
import { Router } from "express";
import { loadMovieDetail, loadPopularMovies } from "../apis/movie";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Home from "../../client/pages/Home";
import Footer from "../../client/components/Footer";
import renderPage from "../utils/renderPage";
import MovieDetail from "../../client/pages/MovieDetail";

const router = Router();

// main page
router.get("/", async (req, res) => {
  const popularMovies = await loadPopularMovies();

  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(popularMovies)}
      }
    </script>
  `;

  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <div id="wrap">
        <Home movieItems={popularMovies} />
        <Footer />
      </div>
    </StaticRouter>
  );

  const templateHtml = renderPage(renderedApp, initData);
  res.send(templateHtml);
});

router.get("/detail/:id", async (req, res) => {
  const popularMovies = await loadPopularMovies();
  const movieDetail = await loadMovieDetail(req.params.id);

  const initData = /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(popularMovies)},
        movieDetail: ${JSON.stringify(movieDetail)}
      }
    </script>
  `;

  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <div id="wrap">
        <MovieDetail movieItems={popularMovies} serverMovieDetail={movieDetail} />
        <Footer />
      </div>
    </StaticRouter>
  );

  const templateHtml = renderPage(renderedApp, initData);
  res.send(templateHtml);
});

export default router;
