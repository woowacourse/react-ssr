import { Router } from "express";
import fs from "fs";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { fetchMoviesPopular } from "../apis/movie";
import { parseMovieItems } from "../models/parseMovieItems";
import { StaticRouter } from "react-router-dom/server";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../client/pages/HomePage";
import MovieDetailPage from "../../client/pages/MovieDetailPage";

const router = Router();

router.get("/", async (req, res) => {
  const popularMovies = await fetchMoviesPopular();
  const movieItems = parseMovieItems(popularMovies);
  const bestMovieItem = movieItems[0];

  const initData = /*html*/ `
  <script>
    window.__INITIAL_DATA__ = {
      movies: ${JSON.stringify(movieItems)}
    }
  </script>
  `;

  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              popularMovies={movieItems}
              bestMovieItem={bestMovieItem}
            />
          }
        />
        <Route path="/detail/:movieId" element={<MovieDetailPage />} />
      </Routes>
    </StaticRouter>
  );

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  res.send(
    template
      .replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
      .replace("<!--${INIT_DATA_AREA}-->", initData)
  );
});

export default router;
