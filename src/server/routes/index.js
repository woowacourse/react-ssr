import fs from "fs";
import path from "path";

import React from "react";
import { Router } from "express";
import { renderToString } from "react-dom/server";
import { fetchPopularMovies } from "../../client/api";
import MoviePage from "../../client/components/MoviePage";
import Footer from "../../client/components/Footer";

const router = Router();

router.use("/", async (_, res) => {
  const popularMovies = await fetchPopularMovies();

  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");
  const initData = template.replace(
    "<!--${INIT_DATA_AREA}-->",
    /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(popularMovies)}
      }
    </script>
  `
  );

  const renderedApp = renderToString(
    <div>
      <MoviePage movies={popularMovies} />
      <Footer />
    </div>
  );

  res.send(
    initData.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>`
    )
  );
});

export default router;
