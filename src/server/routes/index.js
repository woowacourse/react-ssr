import fs from "fs";
import path from "path";
import App from "../../client/App";

import { Router } from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { loadNowPlaying } from "../api/loadMovies";

const router = Router();

router.use("/", async (_, res) => {
  const movies = await loadNowPlaying();
  const renderedApp = renderToString(<App movies={movies} />);
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
