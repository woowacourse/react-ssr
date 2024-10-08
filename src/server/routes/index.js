import App from "../../client/App";
import fs from "fs";
import path from "path";

import React from "react";
import { Router } from "express";
import getMovies from "../../client/apis/getMovies";
import { renderToString } from "react-dom/server";

const router = Router();

router.use("*", async (_, res) => {
  // const initData = template.replace(
  //   "<!--${INIT_DATA_AREA}-->",
  //   /*html*/ `
  //   <script>
  //     window.__INITIAL_DATA__ = {
  //       movies: ${JSON.stringify(popularMovies)}
  //     }
  //   </script>
  // `
  // );

  const movies = await getMovies.nowPlaying();
  const renderedApp = renderToString(<App movies={movies} />);
  const templatePath = path.resolve(__dirname, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  res.send(template.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`));
});

export default router;
