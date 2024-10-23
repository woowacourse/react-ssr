import fs from "fs";
import path from "path";

import { Router } from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { loadNowPlaying } from "../../../public/scripts/loadMovies";
import App from "../../client/app/App";
import { MovieModalProvider } from "../../client/pages/MainPage/hooks/useMovieModal";

const router = Router();

router.use(async (req, res) => {
  const { id } = req.params;

  const movies = await loadNowPlaying();
  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <MovieModalProvider>{<App movies={movies} />}</MovieModalProvider>
    </StaticRouter>
  );
  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");
  const initData = template.replace(
    "<!--${INIT_DATA_AREA}-->",
    /*html*/ `
    <script>
      window.__INITIAL_DATA__ = {
        movies: ${JSON.stringify(movies)}
      }
    </script>
  `
  );
  res.send(initData.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`));
});

export default router;
